const authController = {};

authController.verifyToken = async (req, res) => {
  const { token } = req.cookies;
  console.log(token);
};

module.exports = authController;
