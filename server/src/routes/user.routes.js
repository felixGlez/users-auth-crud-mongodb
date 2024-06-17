const express = require('express');
const controller = require('../controllers/users.controller');
const userRoutes = express.Router();

userRoutes.get('/', controller.getAllUsers);
userRoutes.post('/', controller.createUser);

module.exports = userRoutes;
