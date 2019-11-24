const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema ({
    summary : { 
        type: String,
        required: [true],
        default: '',
    },
    addType : {
        type: Schema.Types.ObjectId,
        ref: 'Type',
        required: [true],
    },
    reporter : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true],
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
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true],
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