const express = require("express");
const homeController = require('../controllers/homeController')

const homeRoutes = express.Router();

homeRoutes.get('/', homeController.homeViewController)

module.exports = homeRoutes;