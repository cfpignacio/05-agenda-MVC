const express = require("express");
const {listContactViewController,ContactViewController,DeleteContactController} = require("../controllers/contactContoller")

const contactRoutes = express.Router();

// Rutas Contact
contactRoutes.get('/', listContactViewController)
contactRoutes.get('/:id', ContactViewController )
contactRoutes.get('/delete/:id', DeleteContactController )

module.exports = contactRoutes;