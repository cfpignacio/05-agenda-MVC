const express = require("express");
const {listContactViewController,ContactViewController,DeleteContactController, FormContactViewController, CreateContactController} = require("../controllers/contactContoller")

const contactRoutes = express.Router();

// Rutas Contact
contactRoutes.get('/', listContactViewController)
contactRoutes.post('/', CreateContactController)
contactRoutes.get('/add', FormContactViewController)
contactRoutes.get('/:id', ContactViewController )
contactRoutes.get('/delete/:id', DeleteContactController )

module.exports = contactRoutes;