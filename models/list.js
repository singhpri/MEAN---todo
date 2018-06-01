const mongoose = require('mongoose');

const BucketListSchema = mongoose.Schema ({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
    enum:['high', 'medium', 'low']
  }

});

module.exports = mongoose.model('BucketList', BucketListSchema);
