<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../../FrontEnd/editCategory/style.css" >
</head>
<body>
<div class="container">

<?php
session_start();

if (!empty($_GET['action']) && ($_GET['action']='closePage')){
    $host = $_SERVER['HTTP_HOST'];
    $uri = dirname(rtrim(dirname($_SERVER['PHP_SELF']), '/\\'));
    header("Location: http://$host$uri");
}

$categoryTitle = $_SESSION['menuItem']['title'];
$categoryLink = $_SESSION['menuItem']['item_link'];
$itemId= $_SESSION['menuItem']['id'];
echo '<i class="title_page">Edit Category</i>
        <form action="../DataBase/actions.php" method="post">
        <input type="hidden" name="action" value="edit_note"/>
        <input type="hidden" name="itemId" value="'.$itemId
    .'"/><div class="formItem">
            <p>Category Name</p>
            <input type="text" name="itemTitle" value="' . $categoryTitle
    . '"/></div>
            <div class="formItem">
                <p>Category Link</p>
                <input type="text" name="itemLint" value="' . $categoryLink
    . '"/></div>
        <button class="btn btn-primary" type="submit">ok</button>
        <a class="btn btn-danger" href="?action=closePage">X</a>';
?>

</div>
</body>
</html>
