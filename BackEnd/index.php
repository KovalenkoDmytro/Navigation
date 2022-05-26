<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../FrontEnd/Navigation/style.css" >

</head>
<body>
<div class="container">

    <?php

    header("Content-Type:text/html; charset=UTF8");
    require_once('DataBase/actions.php');
    require_once('View/navigation.php');

    $result = getItemsFromDB();
    echo '<a class="btn btn-secondary" href="?action=add_node">' . 'addCategory' . '</a>';
    view_cat($result);

    if (!empty($_GET['action']) && ($_GET['action'] == 'add_node')) {

        $host = $_SERVER['HTTP_HOST'];
        $uri = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
        $parent = $_GET['category_id'];

        header("Location: http://$host$uri/View/addCategory.php?parent_id=" . "{$parent}");
    } elseif (!empty($_GET['action']) && ($_GET['action'] === 'del_node')) {
        delFromDB($_GET);
    } elseif (!empty($_GET['action']) && ($_GET['action'] === 'edit_node')) {
        getItem($_GET['category_id']);
    }
    ?>
</div>

<script src="../FrontEnd/Navigation/navigation.js"></script>
</body>
</html>




