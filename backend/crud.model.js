const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let crudUser = new Schema({
    name: {
        type: String
    },
    exp: {
        type: Number
    },
    int1: {
        type: String
    },
    int2: {
        type: String
    },
    int3: {
        type: String
    },
    prof1: {
        type: String
    },
    prof2: {
        type: String
    },
    linkedIn:{
        type: Number
    },
    github:{
        type: Number
    },
    about:{
        type: String
    }
});

module.exports = mongoose.model('user', crudUser);
