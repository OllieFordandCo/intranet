<?php

class UserTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
    public function run()
    {
        DB::table('users')->delete();

        User::create(
			array(
				'email' => 'ruben@ollieford.co.uk',
				'password' => Hash::make('ducksarecool'),
				'activated' => 1
			)
		);
        User::create(
			array(
				'email' => 'tom@ollieford.co.uk',
				'password' => Hash::make('ducksarecool'),
				'activated' => 1
			)
		);
        User::create(
			array(
				'email' => 'andres@ollieford.co.uk',
				'password' => Hash::make('ducksarecool'),
				'activated' => 1
			)						
		);
    }

}
