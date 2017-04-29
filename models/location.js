var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LocationSchema   = new Schema({
    address: String,
    town: String,
    country: String
});

module.exports = mongoose.model('Location', LocationSchema);