const express = require('express');
const { check } = require('express-validator');

const placesController = require('../controllers/places-controllers');

const router = express.Router();


router.get('/:pid', placesController.placesById);

router.get('/user/:uid', placesController.placesByUserId);

router.patch('/:pid', [check('title').not().isEmpty(),
check('description').isLength({ min: 5 })],
    placesController.updatePlaces);

router.delete('/:pid', placesController.deletePlaces);

router.post('/', [check('title').not().isEmpty(),
check('description').isLength({ min: 5 }),
check('address').not().isEmpty()],
    placesController.createPlace);

module.exports = router;
