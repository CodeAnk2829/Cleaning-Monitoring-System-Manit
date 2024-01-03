const mongoose = require("mongoose");
require('dotenv').config();

const URI = process.env.MONGO_URI;
const connectDatabase = async () => {
    await mongoose.connect(URI);
};

module.exports = connectDatabase;