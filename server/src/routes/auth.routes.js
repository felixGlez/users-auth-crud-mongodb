const express = require('express');
const authController = require('../controllers/auth.controller');
const authRoutes = express.Router();

authRoutes.get('/verifyToken', authController.verifyToken);

module.exports = authRoutes;
