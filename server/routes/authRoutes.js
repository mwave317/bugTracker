require('dotenv').config();

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const cors = require('cors');



// router.post('/token', (req, res) => {
//     const refreshToken = req.body.token;
//     if (refreshToken === null) return  res.sendStatus(401);
//     if (!refreshToken.includes(refreshToken)) return res.sendStatus(403);
//     jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403) 
//             const  accessToken = generateAcessToken({name: user.username})
//             res.json({ accessToken: accessToken})
//     })
// });

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

const setToken = (token, id) => {

}


router.post('/signin', cors(), (req, res) => {
    try {
        const { username, password } = req.body;

        return User.find({ username }).then(result => {
            return result.map(user => {
                return bcrypt.compare(password, user.password, (err, response) => {
                    if (err) {
                        console.log(err);
                    } else if (response) {
                        console.log(response)
                        if (!user._id) {
                            console.log('Hi')
                            const error = new Error('Please check your username and password.')
                            error.statusCode = 401;
                        }
                        const token = jwt.sign({
                            userId: user._id.toString(),
                            firstName: user.firstName, 
                        }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
                        res.json({token: token, userId: user._id, firstName: user.firstName })
                    }
                })
            });

        });

    } catch {
        res.status(500).send('Failed');
    }
})

router.delete('/logout'), (req, res) => {
    //Find the user  in the database and then delete the token.
}
module.exports = router;