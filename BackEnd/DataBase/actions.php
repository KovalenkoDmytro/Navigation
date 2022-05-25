<?php
require_once('connect.php');

if (!empty($_POST['action']) && ($_POST['action'] === 'add')) {
    addToDB($_POST);
}



function addToDB(array $data): void
{
    global $connect;

    $itemTitle = $data['itemTitle'];
    $itemLink = $data['itemLint'];
    $itemParent = $data['parentId'];

    if (!empty($itemParent)) {
        $parenSQL = "INSERT INTO navigation (title, item_link,parent_id) VALUES ('$itemTitle', '$itemLink','$itemParent')";
        mysqli_query($connect, $parenSQL);
    } else {
        $sql = "INSERT INTO navigation (title, item_link) VALUES ('$itemTitle', '$itemLink')";
        mysqli_query($connect, $sql);
    }
    $host = $_SERVER['HTTP_HOST'];
    $uri = dirname(rtrim(dirname($_SERVER['PHP_SELF']), '/\\'));
    header("Location: http://$host$uri");

}

function getItemsFromDB(): array|null
{
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

function delFromDB(array $data): void
{
    global $connect;

    $itemTitle = $data['category_id'];
    $sql = "DELETE FROM navigation where id = {$itemTitle}";
    mysqli_query($connect, $sql);
    $host = $_SERVER['HTTP_HOST'];
    $uri = $_SERVER['PHP_SELF'];
    header("Location: http://$host$uri");

}

function getItem(string $itemID){
    global $connect;

    $sql = "SELECT * FROM navigation WHERE `id` = '$itemID' ";
    $result = mysqli_query($connect, $sql);

    session_start();
    $_SESSION["menuItem"]= mysqli_fetch_assoc($result);

    $host = $_SERVER['HTTP_HOST'];
    $uri = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
    header("Location: http://$host$uri/View/editCategory.php");
}