const router = require('express').Router();
const { User } = require('../../models');


router.get('/', (req, res) => {
  res.json('JUICY');
})

router.post('/sign-up', (req, res) => {
    const { username, email, password } = req.body;
    const userData = User.create({
        username: username,
        password: password,
        email: email
})
})

module.exports = router;