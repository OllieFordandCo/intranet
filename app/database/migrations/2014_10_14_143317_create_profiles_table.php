<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('profiles', function(Blueprint $table)
		{
			$table->increments('id');
			$table->tinyInteger('title')->nullable();
			$table->string('first_name', 50);
			$table->string('last_name', 50);
			$table->string('position', 30)->nullable();
			$table->string('email', 50)->unique();
			$table->string('telephone', 14)->nullable(); // 044 012345 678 910
			$table->longText('address')->nullable();
			$table->string('contact_on')->nullable();
			$table->longText('additional_info')->nullable();
			$table->integer('profile_type');
			$table->integer('status');
			$table->string('last_login', 50)->nullable();
			$table->string('last_login_from', 100)->nullable(); // sometimes returns host name instead of IP address.
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('profiles');
	}

}
