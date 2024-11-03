// src/backend/serverVolunteer.js

import express from 'express';
import volunteerRoutes from './routes/volunteer.routes.js';
import connectToDatabase from './utils/database.js';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.VOLUNTEERS_PORT || 5001;

app.use(morgan('dev'));
app.use(express.json());

// Conectar a la base de datos
connectToDatabase();

// Rutas de voluntarios
app.use('/api/volunteers', volunteerRoutes);

app.listen(PORT, () => console.log(`Servidor de voluntarios corriendo en el puerto ${PORT}`));
