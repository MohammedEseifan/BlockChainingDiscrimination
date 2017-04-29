var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ResumeSchema   = new Schema({
    skills: [String],
    school: String,
    grade: Number
});

module.exports = mongoose.model('Resume', ResumeSchema);