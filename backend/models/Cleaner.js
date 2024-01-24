const mongoose = require('mongoose');
const { string } = require('zod');

const cleanerSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: [true, "Name required"]
    },
    gender: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    },
    works_at: { // building
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Building'
    },
    assigned_in: { // block
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Block'
    },
    assigned_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const Cleaner = mongoose.model('Cleaner', cleanerSchema);
module.exports = Cleaner;