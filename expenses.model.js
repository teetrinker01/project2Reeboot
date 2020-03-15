const mongoose = require('mongoose')

const expensesSchema = new mongoose.Schema({
  "electricity": [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'property',
      required: true
      },
      {
      "reference": {type: String, maxlength: 50},
      "date": {type: Number, min: 6, max: 12},
      "amount": {type: String}
      }],
  "water": [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'property',
      required: true
      },
      {
      "reference": {type: String, maxlength: 50},
      "date": {type: Number, min: 6, max: 12},
      "amount": {type: String}
      }],
  "propertyTax": [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'property',
      required: true
      },
      {
      "reference": {type: String, maxlength: 50},
      "date": {type: Number, min: 6, max: 12},
      "amount": {type: String}
      }],      
  "homeownersAssn": [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'property',
      required: true
      },
      {
      "reference": {type: String, maxlength: 50},
      "date": {type: Number, min: 6, max: 12},
      "amount": {type: String}
      }], 
  "insurance": [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'property',
      required: true
      },
      {
      "reference": {type: String, maxlength: 50},
      "date": {type: Number, min: 6, max: 12},
      "amount": {type: String}
      }], 
  "other": [
      {
     type: mongoose.Schema.Types.ObjectId,
      ref: 'property',
      required: true
      },
      {
      "reference": {type: String, maxlength: 50},
      "date": {type: Number, min: 6, max: 12},
      "amount": {type: String}
      }], 
  "accounting": [
      {
      "reference": {type: String, maxlength: 50},
      "date": {type: Number, min: 6, max: 12},
      "amount": {type: String}
      }],       
  "salaries": [
      {
      "reference": {type: String, maxlength: 50},
      "date": {type: Number, min: 6, max: 12},
      "amount": {type: String}
      }],  
  "salaries": [
      {
      "reference": {type: String, maxlength: 50},
      "date": {type: Number, min: 6, max: 12},
      "amount": {type: String}
      }]
})

const expensesSchema = mongoose.model('expenses', expensesSchema)
module.exports = expensesSchema