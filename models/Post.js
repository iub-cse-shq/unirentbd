var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/**
 * A Validation function for local strategy password
 */
var validateLocalStrategyPassword = function(password) {
    return (this.provider !== 'local' || (password && password.length > 6));
};

var PostSchema = {

  fullName: {
        type: String,
        trim: true,
        required: 'Full Name required'
    },
   email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email required'
    },
  
  houseName: {
        type: String,
        trim: true,
        required: 'House Name required'
    },
    PhoneNumber: {
        type: Number,
        trim: true,
        required: 'Phone Number required'
    },
    
  rentCost: {
        type: Number,
        trim: true,
        required: 'Rent cost required'
    },
  address: {
        type: String,
        trim: true,
        required: 'address required'
    },
  city: {
        type: String,
        trim: true,
        required: 'city required'
    },
    
  zip: {
        type: Number,
        trim: true,
        required: 'zip required'
    },
   floor: {
        type: Number,
        trim: true,
        required: 'Floor required'
    },
   room: {
        type: Number,
        trim: true,
        required: 'Room required'
    },
    photo: {
        type: String,
        default: 'http://www.ee-ip.org/sites/default/files/default_images/default-user.png',
        trim: true
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

var Post = mongoose.model('Post', PostSchema, 'Posts');
module.exports = Post;
