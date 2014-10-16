<?php

class SettingTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
    public function run()
    {
        DB::table('settings')->delete();

        Setting::create(
			array(
				'setting_name' => 'primary_color',
				'setting_value' => '#FF00FF'	
			)						
		);
    }

}
