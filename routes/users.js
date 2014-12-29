var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var db = req.db;
  var col = db.get('testCol');
  col.find({},{},function(e, docs){
    res.send(docs);
  });

});

module.exports = router;
// itay is gay