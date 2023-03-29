const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newDocSchema = new Schema ({
  title: { type: String, required: true },
  description: { type: String, required: false },
  date: { type: String, required: true }
})

const newDoc = mongoose.model('Documents', newDocSchema);

module.exports = newDoc;
//return a constructor function.