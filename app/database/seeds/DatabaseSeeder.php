<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

        $this->call('UserTableSeeder');
        $this->command->info('User table seeded!');

        $this->call('ProfileTableSeeder');
        $this->command->info('Profile table seeded!');

        $this->call('SettingTableSeeder');
        $this->command->info('Setting table seeded!');						
	}

}
