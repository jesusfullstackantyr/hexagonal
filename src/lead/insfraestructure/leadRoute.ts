import express from "express";
import { createLeadController } from "./dependencies";

export const leadRouter = express.Router();

leadRouter.post(
    "/",
    createLeadController.run.bind(createLeadController)
);