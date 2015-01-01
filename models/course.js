/**
 * Created by Itay on 01/01/2015.
 */
var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    name : String,
    cardSets : [{type : mongoose.Schema.Types.ObjectId, ref: 'cardSet'}]
});

mongoose.model('course', courseSchema);