<?php

class ProfileTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
    public function run()
    {
        DB::table('profiles')->delete();

        Profile::create(
			array(
				'first_name' => 'Ruben',
				'last_name' => 'Madila',
				'email' => 'ruben@ollieford.co.uk',
				'profile_type' => 0,
				'status' => 1,			
			)
		);
        Profile::create(
			array(
				'first_name' => 'Tom',
				'last_name' => 'Whiteley',
				'email' => 'tom@ollieford.co.uk',
				'profile_type' => 0,
				'status' => 1,
			)
		);
        Profile::create(
			array(
				'first_name' => 'Andres',
				'last_name' => 'Fulla',
				'email' => 'andres@ollieford.co.uk',
				'profile_type' => 0,
				'status' => 1,				
			)
		);
    }

}
