var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ContactSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },

  email: {
    type: String,
    default: '',
    trim: true,
    required: 'Content required'

  },
  
   subject: {
    type: String,
    default: '',
    trim: true,
    required: 'Content required'

  },
  
   message: {
    type: String,
    default: '',
    trim: true,
    required: 'Content required'

  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Contact = mongoose.model('Contact', ContactSchema, 'contacts');
module.exports = Contact;
