const express = require("express");
const {listContactViewController,ContactViewController} = require("../controllers/contactContoller")

const contactRoutes = express.Router();

// Rutas Contact
contactRoutes.get('/', listContactViewController)
contactRoutes.get('/:id', ContactViewController )

module.exports = contactRoutes;