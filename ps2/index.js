const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {dsb: 'Data Science Building' });
});

module.exports = router;
