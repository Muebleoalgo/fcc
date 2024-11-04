// src/backend/models/volunteerModel.js
import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
    },
    apellidos: {
      type: String,
      required: [true, 'Los apellidos son obligatorios'],
    },
    dni: {
      type: String,
      required: [true, 'El DNI es obligatorio'],
      match: [/^\d{8}$/, 'El DNI debe contener exactamente 8 dígitos numéricos'],
    },
    email: {
      type: String,
      required: [true, 'El correo electrónico es obligatorio'],
      match: [/.+@.+\..+/, 'El correo electrónico no es válido'],
    },
    telefono: {
      type: String,
      required: [true, 'El teléfono es obligatorio'],
      match: [/^\d{9}$/, 'El teléfono debe contener exactamente 9 dígitos numéricos'],
    },
    fecha_nacimiento: {
      type: Date,
      required: [true, 'La fecha de nacimiento es obligatoria'],
    },
    areas_interes: {
      type: String,
      required: [true, 'El área de interés es obligatoria'],
    },
    experiencia_voluntariado: {
      type: String,
      required: false,
    }
  });

const Volunteer = mongoose.model('Volunteer', volunteerSchema);
export default Volunteer;
