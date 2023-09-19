"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const leadRoute_1 = require("./lead/insfraestructure/leadRoute");
const bookRouter_1 = require("./book/infraestructure/bookRouter");
const authRouter_1 = require("./auth/insfraestructure/authRouter");
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use('/leads', leadRoute_1.leadRouter);
app.use('/books', bookRouter_1.bookRouter);
app.use('auth', authRouter_1.authRouter);
app.listen(3000, () => {
    signale.success("Server online in port 3000");
});
