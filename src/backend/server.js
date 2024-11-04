// src/backend/server.js
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectToDatabase from './utils/database.js';
import volunteerRoutes from './routes/volunteer.routes.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Usa CORS para permitir todas las solicitudes
app.use(cors());

// Conectar a la base de datos
connectToDatabase();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/volunteers', volunteerRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
