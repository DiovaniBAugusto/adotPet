import { Request, Response } from 'express'

export interface AuthUserProps{
    handle: (req: Request, res: Response) => Promise<Response | any>
}