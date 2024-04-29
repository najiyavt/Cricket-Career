const express = require('express');
const router = express.Router()

const controller = require('../controllers/profile');

router.post('/profile', controller.postProfile);

router.get('/profile/name/:name', controller.getProfile)

router.get('profile/name/:name',controller.getBySearch);

router.delete('/profile/id/:id',controller.deleteProfile)

module.exports=router;