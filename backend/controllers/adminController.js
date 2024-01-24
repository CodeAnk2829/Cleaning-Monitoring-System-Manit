const Admin = require("../models/Admin");

exports.getAdmins = async (req, res) => {
    const admins = await Admin.find({});
    if(!admins) {
        res.status(404).json({
            msg: "No admin found"
        });
    }
    let adminDetails = [{
        id: "1",
        name: "Select"
    }];

    admins.map(admin => {
        adminDetails.push({
            id: admin._id,
            name: admin.name
        });
    });

    res.status(200).json(adminDetails);
}

exports.setAdmin = async (user) => {
    await Admin.create({
        username: user._id,
        name: user.name,
        gender: user.gender
    });
}
