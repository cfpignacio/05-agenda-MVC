const express = require("express");
const {homeViewController,saludoViewController, contactosEjemploController, logoutController} = require('../controllers/homeController')

const homeRoutes = express.Router();

homeRoutes.get('/', homeViewController)
homeRoutes.get('/logout', logoutController)
homeRoutes.get('/saludo', saludoViewController)

module.exports = homeRoutes;