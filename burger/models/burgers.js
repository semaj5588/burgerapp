var orm 			= require ("../config/orm.js");

addBurger: function(burger, callback){

		// Creating a routeName so its easy to search. 
		var routeName = burger.name.replace(/\s+/g, '').toLowerCase();
		console.log(routeName);

		var s = "INSERT INTO " + burgers + " (id, burgerName, devoured, date,) VALUES (?,?,?,?,?)";

		connection.query(s,[routeName, burger.id, burger.burgerName, burger.devoured, burger.date], function(err, result) {
            
            callback(result);

        });

	}

module.exports = orm;