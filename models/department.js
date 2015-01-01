/**
 * Created by Itay on 01/01/2015.
 */
var mongoose = require('mongoose');

var departmentSchema = new mongoose.Schema({
    name : String,
    courses : [{type : mongoose.Schema.Types.ObjectId, ref: 'course'}]
});

mongoose.model('department', departmentSchema);