const {prisma} = require('../../prisma/prismaClient')

homeViewController =  (req, res) => {
    res.render('home/index',{title:'Home 🏠'})
}

saludoViewController = (req, res) => {
    res.render('home/saludo',{title:'Saludo 👋'})
}




module.exports = {
    homeViewController,
    saludoViewController,
};