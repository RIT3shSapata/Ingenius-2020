const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let profile = new Schema({
    exp: {
        type: Number,
        required: true
    },
    int1: {
        type: String,
        required: true
    },
    int2: {
        type: String,
        required: true
    },
    int3: {
        type: String,
        required: true
    },
    prof1: {
        type: String,
        required: true
    },
    prof2: {
        type: String,
        required: true
    },
    linkedIn: {
        type: String
    },
    github: {
        type: String
    },
    about: {
        type: String
    },
    photo: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Profile', profile);