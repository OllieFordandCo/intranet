@extends('layouts.public')

@section('title')
Hello
@stop

@section('content')
    <section class="intro-hero">
    	<img src="{{ asset('/assets/img/bg-intro.jpg') }}" style="max-width:100%;height:auto;min-width:100%;display:block;" class="hero-image" />
    </section>
    <div class="">
    	@include('components/login')
    </div>
@stop