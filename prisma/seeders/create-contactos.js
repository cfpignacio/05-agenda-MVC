const {prisma} = require('../../prisma/prismaClient')

const seedContacto = async () => {
    try {

        console.log('Iniciando carga de contactos....')

        const contactos = [
            {firstname: 'Jose',lastname:'Perez',email:"jose@perez.com", phone:'4444-1322' },
            {firstname: 'Gonzalo',lastname:'Zalo',email:"gonzalo@zalo.com", phone:'3232-1111' },
            {firstname: 'Sofia',lastname:'Fernandez',email:"sofia@fernandez.com", phone:'3900-2003' },
        ]

        for(const contacto of contactos){
            console.log(`Insertando al contacto ${contacto.email}`)
            await prisma.contacto.create({data:contacto})
        }


        console.log('Contactos cargados correctamente!!!')

    } catch (error) {
        console.error('Error al ejecutar el seeder:', error)
    } 
}

(async () => {
    await seedContacto();
})();
