const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: Number, // <-- overwrite Mongoose's default `_id`
    name : String,
  });

  module.exports = mongoose.model('Blog', schema);

  