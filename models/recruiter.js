var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RecruiterSchema   = new Schema({
    firstName: String,
    lastName: String,
    level: String,
    traits:[{name:String,score:Number}],
    timeAccuracy:[{time:String, accuracy:Number}]
});

module.exports = mongoose.model('Recruiter', RecruiterSchema);