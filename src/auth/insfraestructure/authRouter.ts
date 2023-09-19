import express from "express";
import { authController } from "./dependecies";

export const authRouter = express.Router();

authRouter.post("/", authController.run.bind(authController));