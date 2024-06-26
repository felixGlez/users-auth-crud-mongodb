const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();

const { corsOptions } = require('./config/cors.config');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
require('dotenv').config();

// Rutas

// Middlewares para cliente
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Uso de rutas
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DATABASE}`
    );
    console.log('Connected to database');
    app.listen(3000, () =>
      console.log('Servidor en ejecución en el puerto 3000')
    );
  } catch (err) {
    console.log('Connection error', err);
  }
};

startServer();
