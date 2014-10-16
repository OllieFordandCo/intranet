<?php 

return array( 
	
	/*
	|--------------------------------------------------------------------------
	| oAuth Config
	|--------------------------------------------------------------------------
	*/
	
	/**
	 * Storage
	 */
	'storage' => 'Session', 

	/**
	 * Consumers
	 */
	'consumers' => array(

		/**
		 * Twitter
		 */
        'Twitter' => array(
            'client_id'     => 'HL5n1rDr9FTdJVO1JBeGhg',
            'client_secret' => 'NnIxlLyb4BNe4UGg1CSTXXqINNFUE2ONxwri53ZCI',
            'scope'         => array(),
        ),	

		/**
		 * Facebook
		 */
		'Facebook' => array(
			'client_id'     => '252659941582147',
			'client_secret' => '17517285979ed8a04de1c86e5c38c891',
			'scope'         => array('email','read_friendlists','user_online_presence'),
		), 

		/**
		 * Freshbooks
		 */
        'Freshbooks' => array(
            'client_id'     => 'olliefordandco',
			'client_secret' => 'VkzwPQ6wbUVVaPSNAuJazHTLBRY9ea3Zx',
            'scope'         => array(),
        ),						

	)

);