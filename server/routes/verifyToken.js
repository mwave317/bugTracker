const jwt = require('jsonwebtoken');

module.exports = authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token =  authHeader && authHeader.split(' ')[1]
    if (token === null) return res.status(401).send('User Not Authorized.')

     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
         if (err) return res.status(403).send('Invalid');
         req.user = user
         next();
     })
}