import type { NextFunction, Request, Response } from 'express';
import * as authService from '../services/auth.service.ts';

export async function register(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await authService.register(req.body);
        return res.status(201).json({ message: 'Register success', user });
    } catch (error) {
        next(error);
    }
}
