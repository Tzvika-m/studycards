/**
 * Created by Itay on 01/01/2015.
 */

var mongoose = require('mongoose');

var cardSchema = new mongoose.Schema({
    front : String,
    back : String
});

mongoose.model('card', cardSchema);