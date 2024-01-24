const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { sendToken } = require("../utils/jwtToken");
const { setAdmin } = require("./adminController");
const { userValidationSchema } = require("../utils/zodValidation");
const { setCleaner } = require("./cleanerController");
const Admin = require("../models/Admin");

const maxAge = 365 * 24 * 60 * 60;

exports.userRegister = async (req, res) => {
    try {
        const { success } = userValidationSchema.safeParse(req.body);
        
        if(!success) {
            throw new Error("Invalid inputs");
        }

        const { username, name, gender, role, building, block, confirmPassword } = req.body;
        let password = req.body.password;

        if(password != confirmPassword) {
            throw new Error("Password doesn't match");
        }
        
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        
        const user = await User.create({ username, password, name, gender, role });
        console.log("entered into userRegister");
        
        if(role === "admin") {

            await sendToken(user._id, res);
            await setAdmin(user);
            res.status(201).json({
                adminCreated: true,
                msg: "Admin created successfully"
            });

        } else if(role === "cleaner") {

            const userId = req.id; // admin's id in Users collection
            console.log(userId);
            const admin = await Admin.findOne({ username: userId });
            console.log(admin);
            if(!admin) {
                throw new Error("User not found");
            }

            const assignedBy = admin._id;
            const cleanerRefId = user._id;

            await sendToken(user._id, res);

            // setCleaner custom function which returns true or false
            const isCleanerSet = await setCleaner({ cleanerRefId, name, gender, building, block, assignedBy });

            if(!isCleanerSet) {
                await User.deleteOne({ _id: user._id });
                throw new Error("Could not assign the cleaner");
            }
            res.status(201).json({
                cleanerCreated: true,
                msg: "Cleaner created successfully"
            });
        } else {
            throw new Error("Something went wrong");
        }
    } catch(err) {
        console.log("userRegister catch block");
        res.status(400).json({
            Error: err.message
        });
    }
}
 
exports.userLogin = async (req, res) => {
   const { username, password, role } = req.body;
   console.log(username);
   console.log(password);
   console.log(role);
   try {
        const user = await User.login(username, password);
        sendToken(user._id, res);
        if(role === "admin" || role === "cleaner") {
            res.status(200).json({
                authenticated: true,
                msg: "User logged in"
            });
        } else {
            res.status(404).json({
                authenticated: false,
                msg: "User not found" 
            });
        }
   } catch(err) {
        res.status(401).json({
            authenticated: false,
            msg: err.message
        });
   }
}