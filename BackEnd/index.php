<?php

header("Content-Type:text/html; charset=UTF8");
require_once ('DataBase/actions.php');
require_once ('View/navigation.php');

$result = getItemsFromDB();
echo '<a href="?action=add_node">' .'addCategory' .'</a>';
view_cat($result);

if(!empty($_GET['action']) && ($_GET['action']=='add_node')){

    $host  = $_SERVER['HTTP_HOST'];
    $uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
    $parent = $_GET['category_id'];

     header("Location: http://$host$uri/View/addCategory.php?parent_id="."{$parent}");
} elseif (!empty($_GET['action']) && ($_GET['action'] === 'del_node')){
    delFromDB($_GET);
} elseif (!empty($_GET['action']) && ($_GET['action'] === 'edit_node')){
    getItem($_GET['category_id']);
}


