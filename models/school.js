/**
 * Created by Itay on 01/01/2015.
 */
var mongoose = require('mongoose');

var schoolSchema = new mongoose.Schema({
    name : String,
    departments : [{type : mongoose.Schema.Types.ObjectId, ref: 'department'}]
}, { collection : "schools"});

mongoose.model('school', schoolSchema);