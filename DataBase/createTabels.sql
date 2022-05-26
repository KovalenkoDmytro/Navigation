CREATE TABLE `navigation`
(
    `id`        int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `title`     varchar(255),
    `parent_id` int(20) DEFAULT 0,
    `item_link` varchar(255)

)