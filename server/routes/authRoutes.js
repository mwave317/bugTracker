const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');


router.post('/signup', async (req, res) => {
    try {

        const { firstName, lastName, email, username } = req.body;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        User.find({ username }).then(async user => {
            if (user.length) {
                res.status(200).send('Username is not available.');
            } else {
                const user = new User({
                    firstName,
                    lastName,
                    email: email.toLowerCase(),
                    username: username.toLowerCase(),
                    password: hashedPassword,
                });

                await user.save();
                res.status(200).send(user);
            }
        });
    } catch {
        res.status(500).send('Server Error');
    }

});

router.post('/signin', (req, res) => {
    try {
        const { username, password } = req.body;

        return User.find({ username }).then(result => {
            return result.map(user => {
                return bcrypt.compare(password, user.password, (err, response) => {
                    if (err) {
                        console.log(err);
                    } else if (response) {
                        // res.status(200).send(true)
                        res.status(200).redirect('http://localhost:3000/dashboard')
                    }
                })
            });

        });

    } catch {
        res.status(500).send('Failed');
    }
})
module.exports = router;