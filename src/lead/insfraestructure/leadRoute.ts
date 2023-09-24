import express from "express";
import { authenticateMiddleware } from "../../auth/infraestructure/middlewares/authentication";
import { createLeadController } from "./dependencies";

export const leadRouter = express.Router();

leadRouter.post(
    "/",
    authenticateMiddleware,
    createLeadController.run.bind(createLeadController)
);