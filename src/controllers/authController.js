const {prisma} = require('../../prisma/prismaClient')
const bcrypt = require('bcryptjs')

loginViewController = (req, res) => {
    res.render('auth/login', {title:'Login usuarios'})
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
        
        req.session.user = {
            fullName:`${user.firstName} ${user.lastName}`,
            email: user.email
        }
        

        res.redirect('/')

    } catch (error) {

        req.flash('errors', 'No pudimos validar el usuario')
        res.redirect('/login')
    }

}

module.exports = {
    loginViewController,
    loginController
}