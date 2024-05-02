const express = require('express');
const router = express.Router()

const controller = require('../controllers/profile');

router.post('/profile', controller.postProfile);

router.get('/profile/name/:name', controller.getByName)

router.get('/profile/id/:id',controller.editProfile); 

router.delete('/profile/:id',controller.deleteProfile)

module.exports=router;