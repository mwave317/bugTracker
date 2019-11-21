const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    username : { 
        type: String,
        required: [true],
        default: '',
    },
    password : {
        type: String,
        required: [true]
    },
    firstName : {
        type: String,
        default: '',
    },
    lastName : {
        type: String,
        default: '',
    },
    email: { 
        type: String,
        required: [true],
        default: '',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('user', userSchema);
