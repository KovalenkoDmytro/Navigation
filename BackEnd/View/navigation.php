<?php

function view_cat(array $arr, int $parent_id = 0){

    if (empty($arr[$parent_id])) {
        return;
    }
    echo '<ul class="navItems">';

    for ($i = 0; $i < count($arr[$parent_id]); $i++) {

        echo '<li class="navItem"><p>' . $arr[$parent_id][$i]['title'] . '</p>'
            . '<div class="actions">
                    <a class="btn btn-primary" href="?action=add_node&category_id=' . $arr[$parent_id][$i]['id'] . '">addSubCategory</a> '
            . '<a class="btn btn-danger" href="?action=del_node&category_id=' . $arr[$parent_id][$i]['id'].'">delCategory</a> '
            . '<a class="btn btn-info" href="?action=edit_node&category_id=' . $arr[$parent_id][$i]['id'] . '">editCategory</a>'
            . '</div>';
        view_cat($arr, $arr[$parent_id][$i]['id']);
        echo '</li>';
    }
    echo '</ul>';

}