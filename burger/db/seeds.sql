USE `burgers_db`;

INSERT `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burgerName` VARCHAR( 255) NOT NULL,
	`name` VARCHAR( 255 ) NOT NULL,
	`devoured` TINYINT(1),
	`date` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

	PRIMARY KEY ( `id` ) );
