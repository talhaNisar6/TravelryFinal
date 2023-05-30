const express = require('express');
const router = express.Router();


const { clickedTravel
    , clickedHotels,
    clickedPlaces,
    clickedWeather,
    clickedToDos,
    clickedUploads,
    clickedSignIn,
    clickedRegister,
    addUser,
    searchUser,
} = require('../Controllers/Home');


router.route('/travel').get(clickedTravel)
router.route('/hotels').get(clickedHotels)
router.route('/places').get(clickedPlaces)
router.route('/weather').get(clickedWeather)
router.route('/todo').get(clickedToDos)
router.route('/uploads').get(clickedUploads)
// router.route('/signin').get(clickedSignIn)
// router.route('/register').get(clickedRegister);

router.route('/register').post(addUser);
router.route('/login').post(searchUser);






module.exports = router;
