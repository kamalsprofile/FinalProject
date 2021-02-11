const mongoose = require('mongoose')

const Schema = mongoose.Schema

const applySchema = new Schema(
  {
    cv: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const Apply = mongoose.model('Apply', applySchema)
module.exports = Apply
