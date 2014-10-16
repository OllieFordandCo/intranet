<?php
/* 
 * Login Component 
 * Ollie Ford & Co - Intranet 
 */ 
?>

@if(Session::has('alert'))
   <?php $alert = Session::get('alert') ?>
   <div class="alert alert-block alert-{{ $alert['type'] }}">{{ $alert['message'] }}</div>
@endif
<!-- Social button -->
<a href="{{ URL::to('login/facebook') }}" type="button" class="btn btn-block btn-facebook"><i class="ico-facebook2 ml5"></i> Connect with Facebook</a>
<a href="{{ URL::to('login/twitter') }}" type="button" class="btn btn-block btn-twitter"><i class="ico-twitter2 ml5"></i> Connect with Twitter</a>
<a href="{{ URL::to('login/freshbooks') }}" type="button" class="btn btn-block btn-success"><i class="icon icon-freshbooks"></i> Connect with Freshbooks</a>
<!-- Social button -->
