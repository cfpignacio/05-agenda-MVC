const {prisma} = require('../../prisma/prismaClient')

homeViewController =  (req, res) => {
    res.render('home/index',{title:'Home 🏠'})
}

saludoViewController = (req, res) => {
    res.render('home/saludo',{title:'Saludo 👋'})
}

contactosEjemploController= async (req, res) => {
    const contactos = await prisma.contacto.findMany();

    res.render('home/contactosejemplo', {title:'EJEMPLO',contactos})
}



module.exports = {
    homeViewController,
    saludoViewController,
    contactosEjemploController
};