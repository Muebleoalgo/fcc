// controllers/volunteerController.js
const Volunteer = require('../models/volunteerModel'); // Importa el modelo de datos

// Controlador para registrar a un voluntario
exports.registerVolunteer = async (req, res) => {
  try {
    const data = req.body;

    // Validar que los campos obligatorios estén presentes
    if (!data.nombre || !data.apellidos || !data.dni || !data.email) {
      return res.status(400).json({ success: false, message: 'Faltan campos obligatorios' });
    }

    // Crear una nueva instancia del modelo Volunteer y guardarla en la base de datos
    const volunteer = new Volunteer(data);
    await volunteer.save();

    res.status(200).json({ success: true, message: 'Registro exitoso' });
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.status(500).json({ success: false, message: 'Error al registrar' });
  }
};
