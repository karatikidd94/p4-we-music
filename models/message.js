const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    fromUserId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fromUser: {
        type: String,
        required: true
        
    },
    toUserId: {
        type: String,
        required: true
    },
    toUser: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },

}, {    
    timestamps: true
});

module.exports = mongoose.model('Message', messageSchema);