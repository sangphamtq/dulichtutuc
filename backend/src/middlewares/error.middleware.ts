import { ERROR_CODES } from '../constants/errorCodes.ts';
import logger from '../utils/logger.ts';
import type { NextFunction, Request, Response } from 'express';

interface ErrorWithStatus extends Error {
    statusCode?: number;
    isOperational?: boolean;
    errorCode?: typeof ERROR_CODES;
}

export const errorHandler = (
    err: ErrorWithStatus,
    _req: Request,
    res: Response,
    _next: NextFunction,
) => {
    void _next;
    logger.error(err.message);
    const statusCode = err.statusCode || 500;
    const errorCode = err.errorCode;
    const message = err.isOperational ? err.message : 'Internal server error';

    res.status(statusCode).json({
        errorCode,
        message,
    });
};
