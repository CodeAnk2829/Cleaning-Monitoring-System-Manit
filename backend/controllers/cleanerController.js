const Cleaner = require("../models/Cleaner");

exports.setCleaner = async (user) => {
    console.log(user);
    try {
        await Cleaner.create({
            username: user.cleanerRefId,
            name: user.name,
            gender: user.gender,
            works_at: user.building,
            assigned_in: user.block,
            assigned_by: user.assignedBy
        });
        return true;
    } catch(err) {
        console.log(err.message);
        return false;
    }
}