var Resume = require('../models/resume');

	exports.getResume = function(req, res) {
        Resume.find(function(err, resumes) {
            if (err)
                res.send(err);

            res.json(resumes);
        });
    };

    // create a bear (accessed at POST http://localhost:8080/api/resumes)
    exports.createResume = function(req, res) {
        
         var resume = new Resume();      // create a new instance of the Bear model
       		
            
               resume.skills = req.body.skills;  
               resume.grade = req.body.grade; 
               resume.school = req.body.school;   




     	

        // save the bear and check for errors
        resume.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: req.body });
        });
       
 
    };


    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    exports.getResumeByID = function(req, res) {
        Resume.findById(req.params.resume_id, function(err, resume) {
            if (err)
                res.send(err);
            res.json(resume);
        })
    };

     exports.updateResumeByID = function(req, res) {

        // use our bear model to find the bear we want
        Resume.findById(req.params.resume_id, function(err, resume) {

            if (err)
                res.send(err);

           var resume = new Resume();      // create a new instance of the Bear model
       		
            
               resume.skills = req.body.skills;  
               resume.grade = req.body.grade; 
               resume.school = req.body.school;   
            
    

            // save the bear
            resume.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'resume updated!' });

            });

        });
    };
       exports.deleteResumeByID = function(req, res) {
        Resume.remove({
            _id: req.params.resume_id
        }, function(err, resume) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    };