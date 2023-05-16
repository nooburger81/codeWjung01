const router = require('express').Router();
const users = require('./users');
const pages = require('./pages');

// router.use('/', pages);

router.use('/users', users);

router.get('/', (req, res) => {
  res.json('STOP ALREADY!');
})


module.exports = router;