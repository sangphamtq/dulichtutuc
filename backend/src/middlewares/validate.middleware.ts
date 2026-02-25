import type { Request, Response } from 'express';
import Joi from 'joi';
import { ERROR_CODES } from '../constants/errorCodes.ts';
import AppError from '../utils/AppError.ts';

export const validate = (schema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: any) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false,
        });

        if (error) {
            throw new AppError(
                'Validation error' + error.details.map((e: any) => e.message),
                409,
                ERROR_CODES.VALIDATION_ERROR,
            );
        }

        next();
    };
};
