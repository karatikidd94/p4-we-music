const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    spotifyLink: {
        type: String,
    },
    img: {
        type: String,
    },
    // user: {
    //     type: Schema.Types.ObjectId, 
    //     ref: 'User', 
    //     required: true
    // }

  }, {
    timestamps: true
  });
  
module.exports = mongoose.model('Profile', profileSchema);