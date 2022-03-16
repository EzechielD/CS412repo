const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {dsb: 'Data Science Building' });
});

/* POST to home page. */
router.post('/', (req, res, next)  => {
  res.render('index', {cas: req.body.id});
});


module.exports = router;
