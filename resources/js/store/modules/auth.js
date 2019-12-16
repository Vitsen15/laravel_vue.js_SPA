/* eslint-disable promise/param-names */
import {AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT} from '../actions/auth'
import {USER_REQUEST} from '../actions/user'

const state = {
    access_token: localStorage.getItem('access_token') || null,
    status: localStorage.getItem('status') || null,
    hasLoadedOnce: false
};

const getters = {
    isAuthenticated: state => !!state.access_token,
    authStatus: state => state.status
};

const actions = {
    [AUTH_REQUEST]: ({commit, dispatch}, credentials) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST);

            axios.post('/login', {
                username: credentials.username,
                password: credentials.password
            }).then(resp => {
                const token = resp.data.access_token;
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                localStorage.setItem('access_token', token);
                commit(AUTH_SUCCESS, resp);
                dispatch(USER_REQUEST);
                resolve(resp)
            }).catch(err => {
                commit(AUTH_ERROR, err);
                localStorage.removeItem('access_token');
                localStorage.removeItem('status');
                reject(err)
            })
        })
    },
    [AUTH_LOGOUT]: ({commit}) => {
        return new Promise((resolve, reject) => {
            axios.post('/logout').then(response => {
                localStorage.removeItem('access_token');
                axios.defaults.headers.common['Authorization'] = '';
                commit(AUTH_LOGOUT);
                resolve(response);
            }).catch(error => {
                localStorage.removeItem('access_token');
                commit(AUTH_LOGOUT);
                reject(error)
            })
        })
    }
};

const mutations = {
    [AUTH_REQUEST]: (state) => {
        state.status = 'loading'
    },
    [AUTH_SUCCESS]: (state, resp) => {
        state.status = 'success';
        state.access_token = resp.data.access_token;
        state.hasLoadedOnce = true
    },
    [AUTH_ERROR]: (state) => {
        state.status = 'error';
        state.hasLoadedOnce = true
    },
    [AUTH_LOGOUT]: (state) => {
        state.access_token = null;
        state.status = null
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}
