// src/backend/routes/volunteer.routes.js
import express from 'express';
import { createVolunteer, getVolunteers, updateVolunteer, deleteVolunteer } from '../controllers/volunteerController.js';

const router = express.Router();

router.post('/register', createVolunteer);    // Crear nuevo voluntario
router.get('/list', getVolunteers);           // Obtener lista de voluntarios
router.put('/update/:id', updateVolunteer);    // Actualizar un voluntario
router.delete('/delete/:id', deleteVolunteer); // Eliminar un voluntario

export default router;
