const {prisma} = require('../../prisma/prismaClient')

listContactViewController = async (req, res) => {
    const contacts = await prisma.contacto.findMany({where:{
        deletedAt: null
    }});
    res.render('contact/list', {title:'contacts', contacts,isAuth : req.session.isAuth , fullName: req.session.fullName, email: req.session.email})
}

ContactViewController = async (req, res) => {

    try {
        const id = Number(req.params.id)
        const contact = await prisma.contacto.findFirstOrThrow({where:{id}})
        res.render('contact/contact', {contact,error:null,isAuth:req.session.isAuth , fullName: req.session.fullName, email: req.session.email})

    } catch (error) {

        res.render('contact/contact', {title:`ERROR`, error:"No pudimos encontrar el contacto",isAuth : req.session.isAuth , fullName: req.session.fullName, email: req.session.email})
    }
   
}

DeleteContactController = async (req,res) => {
    try {
        const id = Number(req.params.id)

        await prisma.contacto.update({
            where: {id},
            data: {
                deletedAt: new Date()
            }
        })

        res.redirect('/contact')
        
    } catch (error) {

        res.render('contact/contact', {title:`ERROR`, error:"No pudimos borrar el contacto",isAuth : req.session.isAuth , fullName: req.session.fullName, email: req.session.email})

    }
}


FormContactViewController = async (req, res) => {
    res.render('contact/create', {title:'Create contact',isAuth : req.session.isAuth , fullName: req.session.fullName, email: req.session.email})
}

CreateContactController = async (req, res) => {

    try {
        const data = req.body
        console.log(data)
        const new_contact = await prisma.contacto.create({data})

        res.redirect('/contact')
        
    } catch (error) {
        res.render('contact/contact', {title:`ERROR`, error:"No pudimos crear el contacto",isAuth : req.session.isAuth , fullName: req.session.fullName, email: req.session.email})
    }
}

ContactViewEditController = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const contact = await prisma.contacto.findFirstOrThrow({where:{id}})
        res.render('contact/edit', {contact})

    } catch (error) {
        res.render('contact/contact', {title:`ERROR`, error:"No pudimos editar el contacto"})
    }
}

ContactEditController = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const contact = await prisma.contacto.update({where:{id},data:{firstname:req.body.firstname, lastname:req.body.lastname}});

        res.redirect('/contact')

    } catch (error) {
        res.render('contact/contact', {title:`ERROR`, error:"No pudimos editar el contacto",isAuth : req.session.isAuth , fullName: req.session.fullName, email: req.session.email})
    }
}
   

module.exports = {
    listContactViewController,
    ContactViewController,
    ContactViewEditController,
    DeleteContactController,
    FormContactViewController,
    CreateContactController,
    ContactEditController
};

