const {prisma} = require('../../prisma/prismaClient')
const { createContactSchema } = require('../helpers/create_contact.validate');
const { editContactSchema } = require('../helpers/edit_contact.validate');

listContactViewController = async (req, res) => {
    const contacts = await prisma.contacto.findMany({where:{
        deletedAt: null
    }});
    res.render('contact/list', {title:'contacts', contacts})
}

ContactViewController = async (req, res) => {

    try {
        const id = Number(req.params.id)
        const contact = await prisma.contacto.findFirstOrThrow({where:{id}})
        res.render('contact/contact', {contact})

    } catch (error) {
        req.flash('errors', 'No pudimos encontrar el contacto solicitado')
        res.redirect('/contact')
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

        res.render('contact/contact', {title:`ERROR`, error:"No pudimos borrar el contacto"})

    }
}


FormContactViewController = async (req, res) => {
    res.render('contact/create', {title:'Create contact'})
}

CreateContactController = async (req, res) => {

    try {
        const data = req.body

        const {error, value} = createContactSchema.validate(data)

        if(error){
            req.flash('errors', error.message)
            res.render('contact/create', {title:'Create contact'})
        }

        const new_contact = await prisma.contacto.create({data})
        
        res.redirect('/contact')
        
    } catch (error) {

        req.flash('errors', error.message)
        res.redirect('/contact/add')
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
        const {error, value} = editContactSchema.validate(req.body)
        if(error){
            throw new Error(error)
        }
        const contact = await prisma.contacto.update({where:{id},data:{firstname:req.body.firstname, lastname:req.body.lastname}});

        res.redirect('/contact')

    } catch (error) {

        req.flash('errors', error.message)
        res.redirect('/contact')
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

