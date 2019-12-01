const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
    userId: {
        type: Number,
        default: -1,
    },
    timestamp: {
        type: Date,
        default: Date.now(),
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('session', sessionSchema);