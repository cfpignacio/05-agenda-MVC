const {prisma} = require('../../prisma/prismaClient')
const bcrypt = require('bcryptjs')

loginViewController = (req, res) => {
    res.render('auth/login', {title:'Login usuarios',error:null, isAuth : req.session.isAuth , fullName: req.session.fullName, email: req.session.email})
}
loginController = async (req, res) => {

    try {

        const {email, password} = req.body
       
        const user = await prisma.user.findUniqueOrThrow({
            where: {
                email,
                deletedAt: null
            }
        });
        
        // validamos el password
        const passwordCheck = await bcrypt.compare(password, user.password);
        if (!passwordCheck) {
            throw new Error();
        }
       
        
        req.session.isAuth = true;
        req.session.fullName = `${user.firstName} ${user.lastName}`
        req.session.email = user.email

        res.render('home/index',{title:'Home 🏠', visitas: req.session.visitas , isAuth : req.session.isAuth , fullName: req.session.fullName, email: req.session.email})

    } catch (error) {
        res.render('auth/login', {title:`ERROR`, error:"No pudimos validar el usuario"})
    }

}

module.exports = {
    loginViewController,
    loginController
}