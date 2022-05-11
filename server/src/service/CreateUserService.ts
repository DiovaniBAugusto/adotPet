import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

class CreateUserService {
    async handle(user: IUser): Promise<IUser> {
        if (!user.name || !user.password) {
            throw new Error('invalid data provided')
        }

        const createdUser: IUser = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password
            }
        }).catch(error => {
            if (error.code == 'P2002') {
                throw new Error('Username or email already exists!')
            } else {
                throw new Error('Internal error.')
            }
        })

        return createdUser
    }
}

export { CreateUserService }