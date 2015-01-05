/**
 * Created by Zvika on 04/01/2015.
 */
var express = require('express');
var mongoose = require('mongoose');
var course = mongoose.model('course');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    course.find()
        .exec(function (err, courses){
            if (err) {
                // TODO : What is this next thingie?
                return next(err);
            }

            res.json(courses);
        })
});

router.get('/:id', function(req, res, next) {
    course.findById(req.params.id.toString())
        .populate("cardSets")
        .exec(function (err, course){
            if (err) {
                // TODO : In case of error return empty?
                res.json([]);
            }

            res.json(course);
        })
});

module.exports = router;