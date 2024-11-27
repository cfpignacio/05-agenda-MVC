const express = require("express");
const {homeViewController,saludoViewController, contactosEjemploController} = require('../controllers/homeController')

const homeRoutes = express.Router();

homeRoutes.get('/', homeViewController)
homeRoutes.get('/saludo', saludoViewController)

module.exports = homeRoutes;