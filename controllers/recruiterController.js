var Recruiter = require('../models/recruiter');

	exports.getRecruiter = function(req, res) {
        Recruiter.find(function(err, recruiters) {
            if (err)
                res.send(err);

            res.json(recruiters);
        });
    };

    // create a bear (accessed at POST http://localhost:8080/api/recruiters)
    exports.createRecruiter = function(req, res) {
        
         var recruiter = new Recruiter();      // create a new instance of the Bear model
       		
            
               recruiter.firstName = req.body.firstName;  
               recruiter.lastName = req.body.lastName; 
               recruiter.candidatePipeline = req.body.candidatePipeline;   




     	

        // save the bear and check for errors
        recruiter.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: req.body });
        });
       
 
    };


    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    exports.getRecruiterByID = function(req, res) {
        Recruiter.findById(req.params.recruiter_id, function(err, recruiter) {
            if (err)
                res.send(err);
            res.json(recruiter);
        })
    };

     exports.updateRecruiterByID = function(req, res) {

        // use our bear model to find the bear we want
        Recruiter.findById(req.params.recruiter_id, function(err, recruiter) {

            if (err)
                res.send(err);

           var recruiter = new Recruiter();      // create a new instance of the Bear model
       		
            
              recruiter.firstName = req.body.firstName;  
               recruiter.lastName = req.body.lastName; 
               recruiter.candidatePipeline = req.body.candidatePipeline; 
    

            // save the bear
            recruiter.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'recruiter updated!' });

            });

        });
    };
       exports.deleteRecruiterByID = function(req, res) {
        Recruiter.remove({
            _id: req.params.recruiter_id
        }, function(err, recruiter) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    };