import express from 'express';
import mercadopago from 'mercadopago';
import paymentRoutes from './routes/payment.routes.js';
import morgan from 'morgan';
import 'dotenv/config';

const accessToken = process.env.ACCESS_TOKEN;

// Configura las credenciales de Mercado Pago
mercadopago.configurations = {
  access_token: accessToken,
};

const app = express();

app.use(morgan('dev'));

app.use('/api', paymentRoutes); // Usa un prefijo para las rutas del archivo payment.routes.js

app.use(express.static('public'));
app.use(express.json());

// Ruta para crear la preferencia de pago
app.post('/create-preference', async (req, res) => {
  try {
    const preference = {
      items: [
        {
          title: 'Donación a la Fundación',
          unit_price: 50, // Precio en soles
          quantity: 1,
        },
      ],
      back_urls: {
        success: 'https://tu-sitio.com/success',
        failure: 'https://tu-sitio.com/failure',
        pending: 'https://tu-sitio.com/pending',
      },
      auto_return: 'approved',
    };

    console.log('MercadoPago Preferences:', mercadopago.preferences);
    console.log('Creando preferencia...');

    const response = await mercadopago.preferences.create(preference);
    console.log('Preferencia creada:', response.body);

    res.json({ id: response.body.id });
  } catch (error) {
    console.error('Error en la creación de preferencia:', error);
    res.status(500).json({ error: `Error en la creación de preferencia: ${error.message}` });
  }
});

// Iniciar el servidor
const PORT = 4242;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
