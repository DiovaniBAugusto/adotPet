import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { userRouter } from "./resource";
import sessions from "express-session";
import cookieParser from "cookie-parser";
import { NodeNextRequest } from "next/dist/server/base-http/node";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());

    this.express.use(
      cors({
        origin: "http://localhost:3000",
      })
    );

    const sessionSecret =
      process.env.SECRET || "Asd219A9v7b@0mngo2pwl&812a2azx3jkh5a7s8kl";
    this.express.use(
      sessions({
        name: "sId",
        secret: sessionSecret,
        saveUninitialized: true,
        resave: false,
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
    this.express.use(userRouter);

    this.express.use("*", (req, res, next) => {
      res.status(404).json({ error: "Endpoint not found" });
    });
  }
}

export default new App().express;
