<?php

define('hostname', "");
define('username',"");
define('password', "");
define('database', "");

$connect = new mysqli(hostname,username,password,database);
mysqli_set_charset ( $connect , "utf8");

if (!$connect) {
    die("Connection failed: " . mysqli_connect_error());
}

