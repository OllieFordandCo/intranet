<?php

/*
|--------------------------------------------------------------------------
| Application & Route Filters
|--------------------------------------------------------------------------
|
| Below you will find the "before" and "after" events for the application
| which may be used to do any work before or after a request into your
| application. Here you may also register your custom route filters.
|
*/

App::before(function($request)
{
	// What needs to happen before nothing happens
	Config::set('remote.connections.runtime.host', '212.67.220.156');
	Config::set('remote.connections.runtime.port', '22');
	Config::set('remote.connections.runtime.username', 'root');
	Config::set('remote.connections.runtime.password', 'nDhnqrst9Fez');
	Config::set('remote.connections.runtime.root', '');
								
	SSH::into('runtime')->run(array(
		'cd '.public_path().'/assets/',
		'sass scss/ollieford.scss css/ollieford.css',
		'sass scss/scaffolding.scss css/scaffolding.css')
		//function ($line) {	
		//	echo $line.PHP_EOL;																
		//}
	);
	
	// Define the application session
	if (!Session::has('intranet'))
	{
		$intranet = array();
		Session::put('intranet', $intranet);
	}		
	
    // Singleton (global) object - $intranet
    App::singleton('intranet', function(){        
		$intranet = new stdClass;
		//$detect = new Mobile_Detect;
		//$intranet->detect = $detect;
        return $intranet;
    });
    $intranet = App::make('intranet');	
    View::share('intranet', $intranet);	
	
});

App::after(function($request, $response)
{
	//
});

/*
|--------------------------------------------------------------------------
| Authentication Filters
|--------------------------------------------------------------------------
|
| The following filters are used to verify that the user of the current
| session is logged into this application. The "basic" filter easily
| integrates HTTP Basic authentication for quick, simple checking.
|
*/

Route::filter('auth', function()
{
	if (Auth::guest())
	{
		if (Request::ajax())
		{
			return Response::make('Unauthorized', 401);
		}
		else
		{
			return Redirect::guest('login');
		}
	}
});


Route::filter('auth.basic', function()
{
	return Auth::basic();
});

/*
|--------------------------------------------------------------------------
| Guest Filter
|--------------------------------------------------------------------------
|
| The "guest" filter is the counterpart of the authentication filters as
| it simply checks that the current user is not logged in. A redirect
| response will be issued if they are, which you may freely change.
|
*/

Route::filter('guest', function()
{
	if (Auth::check()) return Redirect::to('/');
});

/*
|--------------------------------------------------------------------------
| CSRF Protection Filter
|--------------------------------------------------------------------------
|
| The CSRF filter is responsible for protecting your application against
| cross-site request forgery attacks. If this special token in a user
| session does not match the one given in this request, we'll bail.
|
*/

Route::filter('csrf', function()
{
	$token = Request::ajax() ? Request::header('X-CSRF-Token') : Input::get('_token');
	if (Session::token() != $token)
	{
		throw new Illuminate\Session\TokenMismatchException('Sorry, the page you requested can only be accessed from within the application.');
	}
});
