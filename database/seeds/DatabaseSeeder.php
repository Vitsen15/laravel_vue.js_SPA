<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         factory(App\User::class, 5)->create();
         factory(App\User::class)->create(['name' => 'avitsentovich', 'email' => 'vitsencool@gmail.com', 'password' => bcrypt('Temp123#')]);
    }
}
