<?php

class ApiController extends BaseController {

    /**
     * The layout that should be used for responses.
     */
    protected $layout = 'layouts.api';

	public function getRoute()
	{
		try {
			$this->layout->content = View::make('public.staff');
		} catch (Exception $e) {
			echo 'Caught exception: ',  $e->getMessage(), "\n";
		}
	}

}