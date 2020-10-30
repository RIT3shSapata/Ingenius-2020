const mongoose = require('mongoose');
const crypto = require('crypto');
const uuid = require('uuid')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    hashed_password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        trim: true
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },

    history: {
        type: Array,
        default: []
    },

    photo: {
        data: Buffer,
        contentType: String
    },
    following: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    followers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
}, { timestamps: true })


//virtual field
userSchema.virtual('password')
    .set(function(password) {
        this._password = password
        this.salt = uuid.v1()
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function() {
        return this._password
    })


userSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if (!password) return '';
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        } catch (err) {
            return "";
        }


    }
};

module.exports = mongoose.model("User", userSchema);