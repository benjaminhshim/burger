const connection = require('./connection');

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    console.log(arr.toString());
    return arr.toString();
  }

var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT ?? FROM burgers";
        console.log(queryString);

        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function(cols, vals, cb) {
        var queryString = "INSERT INTO burgers (" + cols + ") VALUES (?)";
        console.log(queryString);

        connection.query(queryString, [vals], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    update: function(tables, objColVals, condition, cb) {
        var queryString = "UPDATE " + tables + " SET " + objToSql(objColVals) + " WHERE " + condition;
        console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
}

module.exports = orm;