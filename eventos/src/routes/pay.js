var express = require('express');
var router = express.Router();

/* GET pay page. */
router.get('/', function(req, res, next) {
  res.render('pay', { title: 'Pay' });
});

module.exports = router;