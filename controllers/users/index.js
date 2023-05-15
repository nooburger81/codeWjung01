const router = require('express').Router();
const { User } = require('../../models');


router.get('/', (req, res) => {
  res.json('JUICY');
})

router.post("/sign-up", async (req, res) => {
  try {
    const { username, email, password } = await req.body;
    console.log(username)
    const userData = await User.create({
        username: username,
        password: password,
        email: email
});
    res.status(200).json(userData);
  } catch (err) {
    res.status(420).json(err);
  }
});

module.exports = router;