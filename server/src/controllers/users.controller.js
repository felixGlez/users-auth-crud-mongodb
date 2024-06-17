const UserModel = require('../models/user.model');

const controller = {};

// Obtener todos los usuarios
controller.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database' + err });
  }
};

// Crear un usuario nuevo
controller.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).send({ error: 'Bad request' + err });

  try {
    const newUser = new UserModel({
      username,
      email,
      password,
    });

    await newUser.save();

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database' + err });
  }
};

module.exports = controller;
