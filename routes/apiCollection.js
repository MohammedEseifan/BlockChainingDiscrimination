var express = require('express');
var router = express.Router();

// Require controller modules
var user_controller = require('../controllers/userController');
var resume_controller = require('../controllers/resumeController');
var recruiter_controller = require('../controllers/recruiterController');



/// user ROUTES ///


/* GET request for creating a debate. NOTE This must come before routes that display debate (uses id) */

router.get('/user/', user_controller.getUser);

/* POST request for creating debate. */
router.post('/user/', user_controller.createUser);

/* GET request to delete debate. */
router.delete('/user/:user_id', user_controller.deleteUserByID);

// POST request to delete debate
router.put('/user/:user_id', user_controller.updateUserByID);

/* GET request to update debate. */
router.get('/recruiter/:recruiter_id', recruiter_controller.getRecruiterByID);


router.get('/recruiter/', recruiter_controller.getRecruiter);

/* POST request for creating debate. */
router.post('/recruiter/', recruiter_controller.createRecruiter);

/* GET request to delete debate. */
router.delete('/recruiter/:recruiter_id', recruiter_controller.deleteRecruiterByID);

// POST request to delete debate
router.put('/recruiter/:recruiter_id', recruiter_controller.updateRecruiterByID);


router.get('/resume/:resume_id', resume_controller.getResumeByID);


router.get('/resume/', resume_controller.getResume);

/* POST request for creating debate. */
router.post('/resume/', resume_controller.createResume);

/* GET request to delete debate. */
router.delete('/resume/:resume_id', resume_controller.deleteResumeByID);

// POST request to delete debate
router.put('/resume/:resume_id', resume_controller.updateResumeByID);




module.exports = router;