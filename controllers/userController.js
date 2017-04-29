var User = require('../models/user');

	exports.getUser = function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    };

    // create a bear (accessed at POST http://localhost:8080/api/users)
    exports.createUser = function(req, res) {
        
        var user = new User();      // create a new instance of the Bear model
       		user.firstName = req.body.firstName;
               user.lastName = req.body.lastName;
               user.stage = req.body.stage;
               user.phoneNumber = req.body.phoneNumber;
               var location = Location();
               location.address = req.body.address;
               location.town = req.body.town;
               location.country = req.body.country;
               var resume = Resume();
               resume.skills = req.body.skills;  
               resume.grade = req.body.grade; 
               resume.school = req.body.school;   
               
               var git = Git();
               git.code = req.body.code;
               user.git = git;
               user.resume = resume;
               user.location = location;




     	

        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: req.body });
        });
       
 
    };


    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    exports.getUserByID = function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        })
    };

     exports.updateUserByID = function(req, res) {

        // use our bear model to find the bear we want
        User.findById(req.params.user_id, function(err, user) {

            if (err)
                res.send(err);

           var user = new User();      // create a new instance of the Bear model
       		user.firstName = req.body.firstName;
               user.lastName = req.body.lastName;
               user.stage = req.body.stage;
               user.phoneNumber = req.body.phoneNumber;
               var location = Location();
               location.address = req.body.address;
               location.town = req.body.town;
               location.country = req.body.country;
               var resume = Resume();
               resume.skills = req.body.skills;  
               resume.grade = req.body.grade; 
               resume.school = req.body.school;   
               
               var git = Git();
               git.code = req.body.code;
               user.git = git;
               user.resume = resume;
               user.location = location;
    

            // save the bear
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'user updated!' });

            });

        });
    };
       exports.deleteUserByID = function(req, res) {
        User.remove({
            _id: req.params.user_id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    };