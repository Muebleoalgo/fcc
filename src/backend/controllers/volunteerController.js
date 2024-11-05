// src/backend/controllers/volunteerController.js
import Volunteer from '../models/volunteerModel.js';

// Crear un nuevo voluntario (Create)
export const createVolunteer = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body); // Log para ver los datos
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json({ success: true, message: 'Voluntario registrado exitosamente.' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ success: false, message: 'Error al registrar voluntario.', errors });
    }
    console.error('Error al guardar los datos:', error);
    res.status(500).json({ success: false, message: 'Error al registrar' });
  }
};

// Obtener todos los voluntarios (Read)
export const getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json({ success: true, data: volunteers });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener voluntarios.' });
  }
};

// Actualizar un voluntario (Update)
export const updateVolunteer = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedVolunteer = await Volunteer.findByIdAndUpdate(id, req.body, {
      new: true,           // Retorna el documento actualizado
      runValidators: true, // Ejecuta las validaciones del modelo en los datos nuevos
    });
    if (!updatedVolunteer) {
      return res.status(404).json({ success: false, message: 'Voluntario no encontrado.' });
    }
    res.status(200).json({ success: true, message: 'Voluntario actualizado exitosamente.', data: updatedVolunteer });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ success: false, message: 'Error al actualizar voluntario.', errors });
    }
    console.error('Error al actualizar los datos:', error);
    res.status(500).json({ success: false, message: 'Error al actualizar' });
  }
};

// Eliminar un voluntario (Delete)
export const deleteVolunteer = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVolunteer = await Volunteer.findByIdAndDelete(id);
    if (!deletedVolunteer) {
      return res.status(404).json({ success: false, message: 'Voluntario no encontrado.' });
    }
    res.status(200).json({ success: true, message: 'Voluntario eliminado exitosamente.' });
  } catch (error) {
    console.error('Error al eliminar los datos:', error);
    res.status(500).json({ success: false, message: 'Error al eliminar' });
  }
};
