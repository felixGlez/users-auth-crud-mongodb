// Opciones avanzadas de configuración de CORS
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'], // Dominios autorizados
  methods: '*', // Métodos permitidos
  optionsSuccessStatus: 204,
  credentials: true, // Para que cuando envías cookies el servidor las mantenga. Si no lo pones, se descartan.
};

module.exports = { corsOptions };
