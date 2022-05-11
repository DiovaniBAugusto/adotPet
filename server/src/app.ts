import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { userRouter } from './resource'

class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.database()
        this.middlewares()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {
        const prisma = new PrismaClient();

        prisma.$connect().then(connection => {
            console.log('Database connected successfully')
        }).catch(error => {
            console.log('Error connectiong to the database');
            throw new Error(error.message)
        })
    }

    private routes(): void {
        this.express.use(userRouter)

        this.express.use("*", (req, res, next) => {
            res.status(404).json({ error: 'Endpoint not found' })
        })
    }
}

export default new App().express