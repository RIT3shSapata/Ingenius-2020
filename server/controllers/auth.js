const { errorHandler } = require('../helpers/dbErrorHandler');
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const User = require('../models/user')


exports.signup = (req, res) => {
    // console.log(req.body);
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        user.salt = undefined
        user.hashed_password = undefined
        res.json({
            user
        })
    })
}

exports.signin = (req, res) => {
    //find based on email
    const { email, password } = req.body
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist. Please sign up'
            })
        }
        //authentication
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email and password don't match"
            })
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
            //persist the token as 't' in cookie with expiry date
        res.cookie('t', token, { expire: new Date() + 9999 })
            //return response with user and token to frontend client
        const { _id, name, email, role } = user
        return res.json({ token, user: { _id, email, name, role } })
    })
}

exports.signout = (req, res) => {
    res.clearCookie('t')
    res.json({ message: ' Sign out successful' })
}
exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: "auth"
});

//only the signed in user can access his profile and cant access others profile based on others id
exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id
    if (!user) {
        return res.status(403).json({
            error: "Access denied"
        })
    }
    next();
}

exports.isAdmin = (req, res, next) => {
    if (req.profile.role === 0) {
        return res.status(403).json({
            error: "Admin resource! Access Denied"
        })
    }
    next();
}