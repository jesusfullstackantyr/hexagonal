import express from "express";
import { addBookController } from "./dependencies";

export const bookRouter = express.Router();

bookRouter.post(
    "/",
    addBookController.run.bind(addBookController)
);