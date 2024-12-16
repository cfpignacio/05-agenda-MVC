const express = require("express");
const {loginViewController, loginController} = require ('../controllers/authController')

const authRoutes = express.Router();

// Rutas Contact
authRoutes.get('/', loginViewController)
authRoutes.post('/', loginController)


module.exports = authRoutes;