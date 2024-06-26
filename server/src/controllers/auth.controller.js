const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const createAccessToken = require('../utils/jwt');
const TOKEN_SECRET = require('../config/token.config');

const authController = {};

authController.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await UserModel.findOne({ email });

    if (!userFound)
      return res.status(400).send({ error: 'The email does not exist' });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).send({ error: 'The password is not correct' });

    // Creamos token de acceso, y recibe como parámetro la información que queremos encriptar
    const token = await createAccessToken({
      _id: userFound._id,
      username: userFound.username,
    });

    // Una vez se ha verificado que tu eres tu, te devuelve los datos del usuario con el que te has logueado
    return res.cookie('token', token).send({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

authController.register = async (req, res) => {
  const { username, email, password, img, name, active } = req.body;
  try {
    const saltRounds = 10; // Número de rondas de sal para la encriptación
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
      username,
      email,
      img,
      name,
      active,
      password: hashedPassword, // Nueva password encriptada para la BBDD
    };

    await newUser.save();
    res.status(201).send({ message: 'User registered' });
  } catch (error) {
    console.error('Error al registrar usuario', error);
    res.status(500).send({ error: 'Error al registrar al usuario' });
  }
};

authController.verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).send({ message: 'Not Token' });

  try {
    const user = jwt.verify(token, TOKEN_SECRET); // Si coincide, desencripta la información del token

    if (!user) return res.status(401).send({ message: 'Invalid token' });

    const userFound = await UserModel.findById(user._id);

    if (!userFound) return res.status(404).send({ message: 'User not found' });

    return res.status(200).json({
      id: userFound._id,
      name: userFound.name,
      username: userFound.username,
      email: userFound.email,
      active: userFound.active,
      img: userFound.img,
    });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

module.exports = authController;
