const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
  "property": [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'property',
      required: true
    }],
  "payment": [{
      "year": {type: Number, required: true},
      "month": {type: Number, required: true},
      "amount": {type: Number, required: true},
    }]
})

const paymentSchema = mongoose.model('tenant', paymentSchema)
module.exports = paymentSchema