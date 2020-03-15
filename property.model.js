const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
  "address": [{
      "street": {type: String, required: true},
      "letter": {type: String},
      "city": {type: String, required: true},
      "postalCode": {type: Number, required: true}
    }],
  "annexes": [{
        "garage": {type: String},
        "storageRoom": {type: String}
      }],
  "monthlyRental": {
      type: Number,
      required: true
    },
  "tenant": [{
      type: mongoose.Schema.Types.ObjectId,
        ref: 'tenant',
        required: true
    }]
})

const propertySchema = mongoose.model('property', propertySchema)
module.exports = propertySchema