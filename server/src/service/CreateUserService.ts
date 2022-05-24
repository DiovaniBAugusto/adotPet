import { PrismaClient } from '@prisma/client'
import { CreateUserServiceProps } from './interfaces/CreateUserServiceInterface';
import { IUser } from './interfaces/UserInterface';


const prisma = new PrismaClient();

class CreateUserService implements CreateUserServiceProps{
    async handle(user: IUser): Promise<IUser> {
        if (!user.username || !user.password) {
            throw new Error('invalid data provided')
        }
        const userRole = 'usuario'
        const createdUser: IUser = await prisma.user.create({
            data: {
                username: user.username,
                email: user.email,
                password: user.password,
                userRole: 'usuario'
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