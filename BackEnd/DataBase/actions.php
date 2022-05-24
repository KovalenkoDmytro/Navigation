<?php
require_once('connect.php');

function addToDB($data)
{
    global $connect;
    $data = json_decode($data);
    $itemName = $data->navItem;
    $itemParent = $data->parent;

    $sql = "INSERT INTO navigation (name, parrent) VALUES ('$itemName','$itemParent')";


    if (mysqli_query($connect, $sql)) {
        echo 'data was added ';
    } else {
        echo 'something was wrong ';
    };
}

function getItemsFromDB():array|null {
    global $connect;

    $sql = "SELECT * FROM navigation";
    $result = mysqli_query($connect, $sql);
    if (!$result) {
        return null;
    }

    $array_navItems = array();
    if (mysqli_num_rows($result) != 0) {

        for ($i = 0; $i < mysqli_num_rows($result); $i++) {
            $row = mysqli_fetch_assoc($result);
            if (empty($array_navItems[$row['parent_id']])) {
                $array_navItems[$row['parent_id']] = array();
            }
            $array_navItems[$row['parent_id']] [] = $row;

        }
    };
    return $array_navItems;
}
