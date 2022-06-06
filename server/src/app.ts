import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { authRouter } from "./resource";
import sessions from "express-session";
class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    const sessionSecret =
      process.env.SECRET || "Asd219A9v7b@0mngo2pwl&812a2azx3jkh5a7s8kl";
    this.express.use(express.json());

    this.express.use(
      cors({
        origin: "http://localhost:3000",
      })
    );
    const conObject = {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    };
    this.express.use(
      sessions({
        name: "sId",
        secret: sessionSecret,
        saveUninitialized: true,
        resave: false,
        store: new (require("connect-pg-simple")(sessions))({
          conObject,
        }),
        cookie: {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 5, //5 dias
        },
      })
    );
  }

  private database(): void {
    const prisma = new PrismaClient();

    prisma
      .$connect()
      .then((connection) => {
        console.log("Database connected successfully");
      })
      .catch((error) => {
        console.log("Error connectiong to the database");
        throw new Error(error.message);
      });
  }

  private routes(): void {
    this.express.use(authRouter);

    this.express.use("*", (req, res, next) => {
      res.status(404).json({ error: "Endpoint not found" });
    });
  }
}

export default new App().express;
