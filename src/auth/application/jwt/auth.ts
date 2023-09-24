import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const secretKey:any = process.env.SECRET_JWT;

export const generateToken = async (data: any): Promise<any> => {
  return await jwt.sign(data, secretKey);
};

