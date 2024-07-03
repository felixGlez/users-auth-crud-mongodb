const UserModel = require('../models/user.model');
const path = require('path');
const fsPromises = require('fs/promises');

require('dotenv').config();
const { v2: cloudinary } = require('cloudinary');
cloudinary.config(process.env.CLOUDINARY_URL);

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

// Obtener usuario por id
controller.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) return res.status(409).send({ error: 'User not exists' });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database' + err });
  }
};

// Crear un usuario nuevo
controller.createUser = async (req, res) => {
  const { username, name, email, password, img, active } = req.body;
  if (!username || !name || !email || !password || !img)
    return res.status(400).send({ error: 'Bad request' });

  try {
    const newUser = new UserModel({
      username,
      name,
      email,
      password,
      img,
      active,
    });

    await newUser.save();

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database' + err });
  }
};

// Actualizar usuario
controller.updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);

    if (!user) return res.status(409).send({ error: 'User not exists' });

    await UserModel.updateOne({ _id: id }, { $set: { ...req.body } });

    const userUpdated = await UserModel.findById(id);
    return res.status(200).send(userUpdated);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database' + err });
  }
};

// Eliminar usuario
controller.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) return res.status(409).send({ error: 'User not exists' });

    await UserModel.deleteOne({ _id: id });

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database' + err });
  }
};

// Subir imagen al server
controller.uploadImage = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    // console.log(req.files);

    const photo = req.files.photo;

    // Construir la ruta donde se guardará el archivo
    const uploadPath = path.join(__dirname, '../uploads', photo.name);

    // Mover el archivo a la ruta especificada
    await photo.mv(uploadPath);

    const nameForCloudinary = path.parse(photo.name).name;
    console.log(path.parse(photo.name).name); //Esto sirve para poder dividir los datos, y sacar sólo el nombre de la imagen.

    // Para subirlo:
    const resultUpload = await cloudinary.uploader.upload(uploadPath, {
      public_id: nameForCloudinary,
    });

    fsPromises.unlink(uploadPath); //Esto evita que se guarde en la carpeta uploads

    res.status(201).send({ url: resultUpload.secure_url });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send(error.message || 'Internal Server Error');
  }
};

module.exports = controller;
