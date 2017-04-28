var express = require('express');
var router = express.Router();

// Require controller modules
var user_controller = require('../controllers/userController');



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
router.get('/user/:user_id', user_controller.getUserByID);

router.get('/user/points/:user_id', user_controller.calculatePointsForUserByID);





module.exports = router;