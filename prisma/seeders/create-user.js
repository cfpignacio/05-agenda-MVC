const {prisma} = require('../../prisma/prismaClient')
const bcrypt = require('bcryptjs')

const seedUser = async () => {
    try {

        console.log('Creando usuario admin....')

        const user_password = await bcrypt.hash('cambiar1234',10)

        const user_default = {
            firstName: 'admin',
            lastName: 'system',
            email: 'admin@contacto.com',
            password: user_password
        }

        const create_user = await prisma.User.create({
            data:user_default
        })

        console.log("Usuario admin creado!")


    } catch (error) {
        console.error('Error al ejecutar el seeder:', error)
    } 
}

(async () => {
    await seedUser();
})();
