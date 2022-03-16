const express = require('express');
const router = express.Router();

/* part b */
router.get('/', (req, res, next) => {
  res.render('index', {dsb: 'Data Science Building' });
});

/* part c */
router.post('/post', (req, res, next)  => {
  res.render('index', {cas: req.body.id});
});

/* part d */
router.get('/namedParam/:id', (req, res, next) => {
  let foo;
});

module.exports = router;
