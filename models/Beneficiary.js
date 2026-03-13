const mongoose = require('mongoose');

const beneficiarySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required']
  },
  placeOfBirth: {
    type: String,
    required: [true, 'Place of birth is required'],
    trim: true
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: ['Male', 'Female']
  },
  nationality: {
    type: String,
    required: [true, 'Nationality is required']
  },
  maritalStatus: {
    type: String,
    required: [true, 'Marital status is required'],
    enum: ['Single', 'Married', 'Divorced', 'Widowed', 'Separated']
  },
  settlementCamp: {
    type: String,
    required: [true, 'Settlement camp is required']
  },
  dateJoinedCamp: {
    type: Date,
    required: [true, 'Date of joining camp is required']
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Beneficiary', beneficiarySchema);