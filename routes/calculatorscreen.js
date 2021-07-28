var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    var one = req.params.one;
  if(one == 1){
    return 1;
  }    
    res.render('calculatorscreen', { title: 'Calculator Sample' });
});

module.exports = router;
