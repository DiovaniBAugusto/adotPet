import {PrismaClient} from '@prisma/client'
import { IUser } from './interfaces/UserInterface';

const prisma = new PrismaClient();



class GetUserService{
    async handle(userEmail: string): Promise<IUser|null>{
        if(!userEmail){
            throw new Error("invalid data provided");
        }

        const getUser : IUser | null = await prisma.user.findFirst({
            where: {
                email: userEmail,
            }
        }).catch(err =>{
            throw new Error("Internal Error");
        })
        
        return getUser;
    }
}

export { GetUserService }