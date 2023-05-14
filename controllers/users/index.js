const router = require('express').Router();
const { User } = require('../../models');


router.get('/', (req, res) => {
  res.json('JUICY');
})

router.post('/sign-up', async (req, res) => {
    const { username, email, password } = req.body;
    const userData = await User.create({
        username: username,
        password: password,
        email: email
});
    res.json(userData);
});

module.exports = router;