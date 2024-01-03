const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.sendToken = async(id, res) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.COOKIE_EXPIRE*365*24*60*60*1000});

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE*365*24*60*60
        ),
        httpOnly: true
    };
    res.cookie("uid", token, options);
}