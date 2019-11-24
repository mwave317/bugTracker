const mongoose = require('mongoose');
const { Schema } = mongoose;

const typeSchema = new Schema({
   type: {
        type: String,
        default: '',
    },
});

module.exports = mongoose.model('type', typeSchema);