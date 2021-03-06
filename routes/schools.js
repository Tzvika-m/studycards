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
        .exec(function (err, schools){
            if (err) {
                // TODO : What is this next thingie?
                return next(err);
            }

            res.json(schools);
        })
});

router.get('/:id', function(req, res, next) {
    school.findById(req.params.id.toString())
        .populate("departments")
        .exec(function (err, school){
            if (err) {
                // TODO : In case of error return empty?
                res.json([]);
            }

            res.json(school);
        })
});

module.exports = router;