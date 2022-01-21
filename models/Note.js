const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,

    },
    tag: {
        type: String,
        default: 'general',
    },
    display: {
        type: Boolean,
        default: 1,
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Notes', NotesSchema)