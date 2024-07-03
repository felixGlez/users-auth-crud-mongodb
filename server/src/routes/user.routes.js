const express = require('express');
const controller = require('../controllers/users.controller');

const userRoutes = express.Router();

userRoutes.get('/', controller.getAllUsers);
userRoutes.get('/:id', controller.getUserById);
userRoutes.post('/', controller.createUser);
userRoutes.patch('/:id', controller.updateUser);
userRoutes.delete('/:id', controller.deleteUser);
userRoutes.post('/upload', controller.uploadImage);

module.exports = userRoutes;
