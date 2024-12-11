const {prisma} = require('../../prisma/prismaClient')

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
        res.render('contact/contact', {contact,error:null})

    } catch (error) {

        res.render('contact/contact', {title:`ERROR`, error:"No pudimos encontrar el contacto"})
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
        console.log(data)
        const new_contact = await prisma.contacto.create({data})

        res.redirect('/contact')
        
    } catch (error) {
        res.render('contact/contact', {title:`ERROR`, error:"No pudimos crear el contacto"})
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
        res.render('contact/contact', {title:`ERROR`, error:"No pudimos editar el contacto"})
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

