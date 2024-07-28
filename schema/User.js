const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    termsCondition: {
        type: Boolean,
        required: true
    },
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        trim: true
    },
    city: {
        type: String
    },
    country: {
        type: String
    }
}, { timestamps: true });

const users = mongoose.model('users', UserSchema);

module.exports = users;