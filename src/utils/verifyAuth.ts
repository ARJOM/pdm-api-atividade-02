import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { SECRET } from "./secret";

export default class VerifyJwt{

    static verifyJWT(req: Request, res: Response, next: NextFunction){
        const token = req.headers['x-access-token'];
    
        if (!token) return res.status(401).json({ auth: false, message: 'Token não enviado.' });
    
        jwt.verify(token.toString(), SECRET, function(err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'Falha ao autenticar token.' });

            // TODO adicionar informação do email à requisição
            next();
        })
    }
}