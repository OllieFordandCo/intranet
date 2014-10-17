<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::group(array('prefix' => 'api', 'before' => 'csrf'), function()
{

	Route::get('/', array('uses' => 'ApiController@getRoute'));

});


Route::group(array('domain' => 'staff.myapp.com'), function()
{

	return View::make('public.staff');

});

Route::get(
	'/components/{component}',
	array(
		'as' => 'components',
		'uses' => 'ComponentsController@showComponents'
	)
);

Route::get('/', array('as' => 'welcome', 'uses' => 'HomeController@showWelcome'));

/* Example of user access to account 
Route::group(array('domain' => '{account}.myapp.com'), function()
{

    Route::get('user/{id}', function($account, $id)
    {
        //
    });

});
*/