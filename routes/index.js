const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('STOP ALREADY!');
})

module.exports = router;