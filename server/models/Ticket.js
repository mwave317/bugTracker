const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema ({
    summary : { 
        type: String,
        required: [true],
        default: '',
    },
    type : {
        type: String,
        required: [true]
    },
    reporter : {
        type: String,
        required: [true],
        default: '',
    },
    description: {
        type: String,
        required: [true],
        default: '',
    },
    labels : {
        type: String,
        default: '',
    },
    sprint: { 
        type: String,
        required: [true],
        default: '',
    },
    assignee: { 
        type: String,
        required: [true],
        default: '',
    },
    epic: { 
        type: String,
        required: [true],
        default: '',
    },
    sprint: { 
        type: String,
        required: [true],
        default: '',
    },
    comment: { 
        type: String,
        required: [true],
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedOn: {
        type: Date,
        default: Date.now(),
    },
    attachement: {
        type: Schema.Types.Mixed,
    }
})

module.exports = mongoose.model('ticket', ticketSchema);