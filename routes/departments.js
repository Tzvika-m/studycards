/**
 * Created by Zvika on 04/01/2015.
 */
var express = require('express');
var mongoose = require('mongoose');
var department = mongoose.model('department');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    department.find()
        .exec(function (err, departments){
            if (err) {
                // TODO : What is this next thingie?
                return next(err);
            }

            res.json(departments);
        })
});

router.get('/:id', function(req, res, next) {
    department.findById(req.params.id.toString())
        .populate("courses")
        .exec(function (err, department){
            if (err) {
                // TODO : In case of error return empty?
                res.json([]);
            }

            res.json(department);
        })
});

module.exports = router;