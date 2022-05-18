import {Request, Response} from 'express'
import { GetUserService } from '../../service';
import bcrypt from 'bcrypt';
import { AuthUserProps } from './interface/AuthUser-Interface';
import webToken from 'jsonwebtoken'



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
            const token = webToken.sign({"_id": user.id}, process.env.SECRET || 'Awh6t7Q4ljB98T56a7vC43boh8.lK', {expiresIn: '7d'})
            res.cookie("token", token, {
                httpOnly: true
            });
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