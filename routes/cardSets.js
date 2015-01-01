var express = require('express');
var mongoose = require('mongoose');
var cardSet = mongoose.model('cardSet');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    cardSet
        .find()
        .populate("cards")
        .exec(function (err, cardSets){
        if (err) {
            // TODO : What is this next thingie?
            return next(err);
        }


        res.json(cardSets);
    })
});

module.exports = router;
