var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ResumeSchema   = new Schema({
    skills: [String],
    school: String,
    grade: Number,
    location: { type: Schema.ObjectId, ref: 'Location' }
});

module.exports = mongoose.model('Resume', ResumeSchema);