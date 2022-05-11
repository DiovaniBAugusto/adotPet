import { Request, Response } from 'express'
import { CreateUserService } from '../../service'
import bcrypt from 'bcrypt'

class CreateUser {
    async handle(req: Request, res: Response): Promise<Response | any> {
        const { username, email, password } = req.body
        const personToCreate = { username, email, password }
        personToCreate.password = bcrypt.hashSync(password, 8)
        try {
            const user = await new CreateUserService().handle(personToCreate)

            return res.json(user)
        } catch (error: any) {
            res.status(500).json({
                error: {
                    message: error.message
                }
            })
        }
    }
}

export { CreateUser }