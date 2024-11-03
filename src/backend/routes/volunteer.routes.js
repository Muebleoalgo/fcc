// src/backend/routes/volunteer.routes.js
const express = require('express');
const volunteerController = require('../controllers/volunteerController');

const router = express.Router();

router.post('/', volunteerController.registerVolunteer); // Cambia '/register' a '/'

module.exports = router;
