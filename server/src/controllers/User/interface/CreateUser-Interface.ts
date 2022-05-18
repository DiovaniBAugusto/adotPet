import { Request, Response } from 'express'

export interface CreateUserProps{
    handle: (req: Request, res: Response) => Promise<Response | any>
}