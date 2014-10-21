@extends('layouts.component')

<?php
/* 
 * Login Component 
 * Ollie Ford & Co - Intranet 
 */ 
?>

@section('title')
Login Component
@stop

@section('content')
<div class="vertical-wrapper">
	
    <div class="vertical-align">
        @if(Session::has('alert'))
           <?php $alert = Session::get('alert') ?>
           <div class="alert alert-block alert-{{ $alert['type'] }}">{{ $alert['message'] }}</div>
        @endif    
        <div class="login component default">
        	<div class="banner-image" style="background-image: url('{{ URL::to('/').'/assets/img/login-component.jpg' }}');"></div>
            <div class="housekeeper">
                <a href="{{ URL::to('login/facebook') }}" class="facebook">@include('svg.facebook')</a>
                <a href="{{ URL::to('login/twitter') }}" class="twitter">@include('svg.twitter')</a>
                <a href="{{ URL::to('login/freshbooks') }}" class="freshbooks">@include('svg.freshbooks')</a>
            </div>
        </div>
    </div>
</div>
@stop