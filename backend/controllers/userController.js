const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { sendToken } = require("../utils/jwtToken");
const { setAdmin } = require("./adminController");

const maxAge = 365 * 24 * 60 * 60;

exports.userRegister = async (req, res) => {
    const { username, name, gender, role } = req.body;
    let password = req.body.password;
    try {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        const user = await User.create({ username, password, name, gender, role });

        if(role === "admin") {
            sendToken(user._id, res);
            setAdmin(user);
            res.status(201).json({
                adminCreate: true,
                msg: "Admin created successfully"
            });
        }
    } catch(err) {
        console.log(err);
    }
}
 
exports.userLogin = async (req, res) => {
   const { username, password, role } = req.body;
   try {
        const user = await User.login(username, password);
        sendToken(user._id, res);
        res.status(200).json({
            authenticated: true,
            msg: "User logged in"
        });
   } catch(err) {
        res.status(401).json({msg: err.message});
   }
}