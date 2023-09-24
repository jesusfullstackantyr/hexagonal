import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const secretKey:any = process.env.SECRET_JWT;

export const authenticateMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'No se proporcionó un token de autenticación.' });
    }

    try {

        const decoded = jwt.verify(token, secretKey);

        (req as any).token = decoded;

        next();
    } catch (error) {
        res.status(401).json({ error: 'Token de autenticación inválido.' });
    }
};