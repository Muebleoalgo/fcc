// src/backend/utils/database.js
require('dotenv').config(); // Cargar variables del archivo .env
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI; // Leer el URI desde el archivo .env

let isConnected; // Variable para rastrear si ya estamos conectados

const connectToDatabase = async () => {
  if (isConnected) {
    console.log("Ya conectado a MongoDB");
    return;
  }

  try {
    const db = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    console.log("Conectado a MongoDB");

  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    throw new Error("Falló la conexión a MongoDB");
  }
};

module.exports = connectToDatabase;
