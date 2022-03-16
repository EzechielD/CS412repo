const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {dsb: 'Data Science Building' });
});

/* POST to home page. */
// router.post('/', function(req, res, next) {
//   res.render('index', {cas: 'College of Arts and Sciences' });
// });

module.exports = router;
