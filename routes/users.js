var express = require('express');
var mongoose = require('mongoose');
var card = mongoose.model('card');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  card.find(function(err, cards) {
    if (err) {
      // TODO : What is this next thingie?
      return next(err);
    }

    res.json(cards);
  });
});

module.exports = router;