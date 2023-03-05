const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newDocSchema = new Schema ({
  title: { type: String, required: true },
  description: { type: String, required: false },
  date: { type: String, required: true }
})

module.exports = mongoose.model('Documents', newDocSchema);
//return a constructor function.