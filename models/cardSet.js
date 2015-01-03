/**
 * Created by Itay on 01/01/2015.
 */

var mongoose = require('mongoose');

var cardSetSchema = new mongoose.Schema({
    name : String,
    owner : String,
    cards : [{type : mongoose.Schema.Types.ObjectId, ref: 'card'}]
}, { collection : "cardSets"});

mongoose.model('cardSet', cardSetSchema);