const express = require('express');
const authController = require('../controllers/auth.controller');

const authRoutes = express.Router();

authRoutes.get('/verifyToken', authController.verifyToken);
authRoutes.post('/login', authController.login);
authRoutes.post('/register', authController.register);

module.exports = authRoutes;
