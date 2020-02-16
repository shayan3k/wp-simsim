<?php

add_action('rest-api-init' , 'sayHello' );

function sayHello (){

    register_rest_route( 'sayHello/v1', 'sayHello', array('methods' => 'GET') )




}


