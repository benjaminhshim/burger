const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/', (req, res) => {
    burger.all(data => {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    })
});

router.post('/api/burgers', (req, res) => {
    burger.create([
        "burger_name"
    ], [
        req.body.burger
    ], (result) => {
        res.redirect('/');
    })
});

router.put('/api/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(data) {
        res.status(200).end();
    });
  });

module.exports = router;