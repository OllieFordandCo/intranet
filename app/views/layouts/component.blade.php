<!DOCTYPE html>
<html class="no-js" lang="en_GB">
<head>
        <meta charset="utf-8">
        <title>@yield('title') - Ollie Ford &amp; Co</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="_token" content="{{ csrf_token() }}">         
        {{ HTML::style('assets/css/scaffolding.css') }}
    	@include('fragments.scripts.modernizr')
    </head>   
    <body data-layout="public">
    <div id="fb-root"></div>
	<script>
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '632855303452563',
          xfbml      : true,
          version    : 'v2.1'
        });
      };
    </script>
    <div class="app-container">
    	<div class="app open full">
			<div class="off-canvas">
				@yield('content') 
            </div>
            <header id="main-header">
            	<button class="canvas-toggle">
                	<i class="bar"></i>
                    <i class="bar"></i>
                    <i class="bar"></i>
                </button>
            </header>
            <div class="content-wrapper">
 
            </div>
        </div>
    </div>
    <section class="overlay">
    	<aside class="loading-wrapper">
        	<div class="loading">
                <i class="bar bar1"></i>
            </div>
        </aside>
    </section> 
	{{ HTML::style('assets/css/ollieford.css') }}         
    {{ HTML::script('//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js') }} 
    <script>window.jQuery || document.write('<script src="assets/js/jquery-1.11.1.min.js"><\/script>')</script>
    {{ HTML::script('assets/js/core.js') }} 

	@if(Agent::isMobile() || Agent::isTablet())
    {{ HTML::script('http://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.js') }}
    {{ HTML::script('assets/js/touch.js') }}
    @endif
    
    @include('fragments.scripts.async')
    </body>
</html>    