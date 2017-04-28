var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    points: Number,
    active: Boolean,
    results: [{ type: Schema.ObjectId, ref: 'Result' }]

});

module.exports = mongoose.model('User', UserSchema);