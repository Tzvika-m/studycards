/**
 * Created by Zvika on 03/01/2015.
 */
var express = require('express');
var mongoose = require('mongoose');
var school = mongoose.model('school');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    school.find()
        .populate("departments")
        .exec(function (err, schools){
            if (err) {
                // TODO : What is this next thingie?
                return next(err);
            }

            res.json(schools);
        })
});

module.exports = router;