var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RecruiterSchema   = new Schema({
    firstName: String,
    lastName: String,
    candidatePipeline: [{ type: Schema.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Recruiter', RecruiterSchema);