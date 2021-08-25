const mongoose = require('./mongo');

module.exports = mongoose.model(
  'ModelA',
  mongoose.Schema(
    {
      name: { type: String, required: true }
    },
    {
      timeStamps: true
    }
  )
);
