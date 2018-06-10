const orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
      orm.selectAll("*", function(res) {
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.insertOne(cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }

    
};
  
  module.exports = burger;