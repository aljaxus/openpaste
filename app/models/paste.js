const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pasteSchema = new Schema({
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  collection: 'pastes',
})

const leModel = mongoose.model('Paste', pasteSchema)
module.exports = leModel