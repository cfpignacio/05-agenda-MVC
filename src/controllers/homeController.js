const {prisma} = require('../../prisma/prismaClient')

homeViewController =  (req, res) => {

  
    res.render('home/index',{title:'Home 🏠' })
}

saludoViewController = (req, res) => {
    //req.session.mensaje = "hola"
    res.render('home/saludo',{title:'Saludo 👋', mensaje:req.session.mensaje})
}

logoutController =  (req, res) => {
    req.session.destroy();

    res.redirect('/')
}


module.exports = {
    homeViewController,
    saludoViewController,
    logoutController
};