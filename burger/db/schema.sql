/* 
This file is intended to help developers get their SQL Databases setup correctly.
It is important since other developers will be unlikely to have the same database or tables setup already. 
*/

CREATE DATABASE  `burgers_db`;
USE `burgers_db`;

CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burgerName` VARCHAR( 255) NOT NULL,
	`devoured` TINYINT(1),
	`date` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

	PRIMARY KEY ( `id` ) );
