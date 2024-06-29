require('dotenv').config();
const TOKEN_SECRET = process.env.TOKEN_SECRET; //Este último TOKEN_SECRET es el del archivo .env
// Esta constante la utilizamos en el jwt.js para crear el token

module.exports = TOKEN_SECRET;
