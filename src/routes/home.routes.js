const express = require("express");
const {homeViewController,saludoViewController, contactosEjemploController} = require('../controllers/homeController')

const homeRoutes = express.Router();

homeRoutes.get('/', homeViewController)
homeRoutes.get('/saludo', saludoViewController)
homeRoutes.get('/ejemplo', contactosEjemploController)

module.exports = homeRoutes;