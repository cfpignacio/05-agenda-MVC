const express = require("express");
const {listContactViewController,ContactViewController,DeleteContactController, FormContactViewController, 
    CreateContactController ,ContactEditController, ContactViewEditController} = require("../controllers/contactContoller")
const {authMiddleware} = require("../middleware/authMiddleware")
const contactRoutes = express.Router();

// Rutas Contact
contactRoutes.get('/',authMiddleware ,listContactViewController)
contactRoutes.post('/',authMiddleware, CreateContactController)
contactRoutes.get('/add',authMiddleware,FormContactViewController)
contactRoutes.get('/:id', authMiddleware,ContactViewController )
contactRoutes.get('/edit/:id', authMiddleware,ContactViewEditController )
contactRoutes.post('/edit/:id', authMiddleware,ContactEditController )
contactRoutes.get('/delete/:id',authMiddleware, DeleteContactController )

module.exports = contactRoutes;