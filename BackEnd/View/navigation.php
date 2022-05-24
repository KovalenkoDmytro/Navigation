<?php

function view_cat(array $arr, int $parent_id = 0){

    if (empty($arr[$parent_id])) {
        return;
    }
    echo '<ul class="navItems">';

    for ($i = 0; $i < count($arr[$parent_id]); $i++) {
        echo '<li class="navItem"><p>' . $arr[$parent_id][$i]['title'] . '</p>'
            . '<div class="actions">
                    <a href="?action=add_node&category_id=' . $arr[$parent_id][$i]['id'] . '">add</a> '
            . '<a href="?action=del_node&category_id=' . $arr[$parent_id][$i]['id'] . '">del</a> '
            . '<a href="?action=edit_node&category_id=' . $arr[$parent_id][$i]['id'] . '">edit</a>'
            . '</div>';
        view_cat($arr, $arr[$parent_id][$i]['id']);
        echo '</li>';
    }
    echo '</ul>';

}