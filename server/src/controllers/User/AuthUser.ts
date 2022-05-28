import {Request, Response} from 'express'
import { GetUserService } from '../../service';
import bcrypt from 'bcrypt';
import { AuthUserProps } from './interface/AuthUser-Interface';

class AuthUser implements AuthUserProps{
    async handle(req: Request, res: Response): Promise< Response| any >{
        const {email, password} = req.body;
        
        try{
            const user = await new GetUserService().handle(email);
            
            if(!user){
                throw new Error("invalid email")
            }
    
            if(!bcrypt.compareSync(password, user?.password as string)){
                throw new Error("invalid password");
            }

            delete user.password;
            console.log(req.sessionID)
            res.status(200).json({user});

        }catch(err: any){
            res.status(500).json({
                err:{
                    message: err.message
                }
            })
        }
    }
}

export { AuthUser };