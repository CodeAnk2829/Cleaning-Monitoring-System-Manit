const mongoose = require("mongoose");

const feedback = new mongoose.Schema({
    rating: {
       1: {
            type : Number,
            default: 0
        },
       2: {
            type : Number,
            default: 0
        },
       3: {
            type : Number,
            default: 0
        },
       4: {
            type : Number,
            default: 0
        },
       5: {
            type : Number,
            default: 0
        },
    },

    description: String,
    image: {
        type: String,
        required: false
    }
});

