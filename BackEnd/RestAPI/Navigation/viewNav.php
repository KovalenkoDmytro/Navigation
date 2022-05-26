<?php
require_once ('../../DataBase/actions.php');
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/text');


$result = getItemsFromDB();
if(!empty($result)){
    echo(json_encode($result));
}






