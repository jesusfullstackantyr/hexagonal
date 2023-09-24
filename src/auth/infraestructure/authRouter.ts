import express, { Router } from "express";
import { authController } from "./dependencies";

export const authRouter:Router = express.Router();

authRouter.post('/',authController.run.bind(authController));
