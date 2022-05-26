<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../../FrontEnd/addCategory/style.css" >
</head>
<body>
<div class="container">

<?php
    require_once ('../DataBase/actions.php');
    if(!empty($_GET['parent_id'])){
        $parent = $_GET['parent_id'];
    }elseif (!empty($_GET['action']) && ($_GET['action']='closePage')){
        $host = $_SERVER['HTTP_HOST'];
        $uri = dirname(rtrim(dirname($_SERVER['PHP_SELF']), '/\\'));
        header("Location: http://$host$uri");
    }

    echo '<i class="title_page">Add Category</i>
            <form action="../DataBase/actions.php" method="post">
             <input type="hidden" name="action" value="add"/>
            <div class="formItem">
                <p>Category Name</p>
                <input type="text" name="itemTitle"/>
            </div>
            <div class="formItem">
                <p>Category Link</p>
                <input type="text" name="itemLint"/>
            </div>';
            if(!empty($parent)){
                echo '<input type="hidden" name="parentId" value="'.$parent.'"/>';
            }
    echo '<button class="btn btn-primary" type="submit">add</button>
            <a class="btn btn-danger" href="?action=closePage">X</a>
           </form>
           
'
?>

</div>
</body>
</html>
