<?php
    require_once ('../DataBase/actions.php');
    if(!empty($_GET['parent_id'])){
        $parent = $_GET['parent_id'];
    }elseif (!empty($_GET['action']) && ($_GET['action']='closePage')){
        $host = $_SERVER['HTTP_HOST'];
        $uri = dirname(rtrim(dirname($_SERVER['PHP_SELF']), '/\\'));
        header("Location: http://$host$uri");
    }

    echo '<form action="../DataBase/actions.php" method="post">
             <input type="hidden" name="action" value="add"/>
            <div>
                <p>Category Name</p>
                <input type="text" name="itemTitle"/>
            </div>
            <div>
                <p>Category Link</p>
                <input type="text" name="itemLint"/>
            </div>';
            if(!empty($parent)){
                echo '<input type="hidden" name="parentId" value="'.$parent.'"/>';
            }
    echo '<button type="submit">add</button>
           </form>
           <a href="?action=closePage">X</a>
'
?>

