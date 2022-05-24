<?php

define('hostname', "serwer2234857.home.pl:3306");
define('username',"35953700_items_property");
define('password', "Malma2033!");
define('database', "35953700_items_property");

$connect = new mysqli(hostname,username,password,database);
mysqli_set_charset ( $connect , "utf8");

if (!$connect) {
    die("Connection failed: " . mysqli_connect_error());
}

