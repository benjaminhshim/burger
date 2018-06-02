const connection = require('./connection');

var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT ?? FROM burgers";
        console.log(queryString);

        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },

    insertOne: function(cols, vals, cb) {
        var queryString = "INSERT INTO burgers (" + cols.toString() + ") + VALUES (??)";
        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }

    // updateOne: function(objColVals, condition, cb) {
    //     var queryString = "UPDATE burgers SET " + objColVals + "WHERE devoured = ?";

    // },
}

module.exports = orm;