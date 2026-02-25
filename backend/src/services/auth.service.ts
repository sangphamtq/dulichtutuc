import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import logger from '../utils/logger.ts';
import User from '../models/user.model.ts';
import AppError from '../utils/AppError.ts';
import { ERROR_CODES } from '../constants/errorCodes.ts';
import { signToken } from '../utils/jwt.ts';
import { sendVerifyEmail } from '../configs/mail.ts';

export const register = async ({ email, password }: { email: string; password: string }) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    logger.info('Registration attempt', { email });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        session.abortTransaction();
        logger.warn('Register failed - email exists', { email });
        throw new AppError('Email already exist!', 409, ERROR_CODES.EMAIL_ALREADY_EXISTS);
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create(
        [
            {
                email,
                password: passwordHash,
                authProviders: ['local'],
            },
        ],
        { session },
    );

    const createdUser = Array.isArray(user) ? user[0] : user;
    const plainUser = createdUser.toObject();
    delete plainUser.password;

    logger.info('User registered successfully', { email });

    const token = signToken({ userId: createdUser._id.toString() });
    const verifyLink = `${process.env.API_URL}/auth/verify-email?token=${token}`;

    await sendVerifyEmail(email, verifyLink);

    await session.commitTransaction();
    logger.info('Verification email sent', { email });

    return plainUser;
};
