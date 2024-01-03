const Admin = require("../models/Admin");

exports.setAdmin = async (user) => {
    await Admin.create({
        username: user._id,
        name: user.name,
        gender: user.gender
    });
}