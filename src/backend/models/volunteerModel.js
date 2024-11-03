// models/volunteerModel.js
const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  dni: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: String },
  fecha_nacimiento: { type: Date },
  areas_interes: { type: [String] },
  experiencia_voluntariado: { type: String }
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
