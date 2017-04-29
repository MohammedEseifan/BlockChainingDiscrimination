var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    firstName: String,
    lastName: String,
    stage: Number,
    phoneNumber: String,
    location: { type: Schema.ObjectId, ref: 'Location' },
    resume:{ type: Schema.ObjectId, ref: 'Resume' },
    git:{ type: Schema.ObjectId, ref: 'Git' }

});

module.exports = mongoose.model('User', UserSchema);