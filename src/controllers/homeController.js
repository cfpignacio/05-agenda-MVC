const {prisma} = require('../../prisma/prismaClient')

homeViewController =  (req, res) => {

    if(req.session.visitas){
        req.session.visitas++
    }else{
        req.session.visitas = 1
    }

    res.render('home/index',{title:'Home 🏠', visitas: req.session.visitas , isAuth : req.session.isAuth , fullName: req.session.fullName, email: req.session.email})
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