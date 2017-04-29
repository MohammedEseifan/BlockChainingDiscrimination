var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GitSchema   = new Schema({
    code:[{name:String}]
});

module.exports = mongoose.model('Git', GitSchema);