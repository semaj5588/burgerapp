// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require('./connection.js');

// ORM 
// =============================================================

var tableName = "burgers";

var orm = {

	// Here our ORM is creating a simple method for performing a query of the entire table.
	// We make use of the callback to ensure that data is returned only once the query is done.
	allCharacters: function(callback){
		var s = 'SELECT * FROM ' + burgers;

		connection.query(s, function(err, result) {
	 
            callback(result);

        });
	},

	// Here our ORM is creating a simple method for performing a query of a single character in the table.
	// Again, we make use of the callback to grab a specific character from the database. 

	searchCharacter: function(name, callback){
		var s = 'select * from ' + burgers + ' where routeName=?';

		connection.query(s,[name], function(err, result) {
	 
            callback(result);
        });

	},

	// Here our ORM is creating a simple method for adding characters to the database
	// Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement. 

	// addBurger: function(burger, callback){

	// 	// Creating a routeName so its easy to search. 
	// 	var routeName = burger.name.replace(/\s+/g, '').toLowerCase();
	// 	console.log(routeName);

	// 	var s = "INSERT INTO " + burgers + " (id, burgerName, devoured, date,) VALUES (?,?,?,?,?)";

	// 	connection.query(s,[routeName, burger.id, burger.burgerName, burger.devoured, burger.date], function(err, result) {
            
 //            callback(result);

 //        });

	// }


};

module.exports = orm;