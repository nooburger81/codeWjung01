const router = require('express').Router();
const users = require('./users');

router.use('/users', users);

// router.get('/', (req, res) => {
//   res.json('STOP ALREADY!');
// })

module.exports = router;