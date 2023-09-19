"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependecies_1 = require("./dependecies");
exports.authRouter = express_1.default.Router();
exports.authRouter.post("/", dependecies_1.authController.run.bind(dependecies_1.authController));
