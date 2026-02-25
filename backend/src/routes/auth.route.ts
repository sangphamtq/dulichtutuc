import express from 'express';
import { register } from '../controllers/auth.controller.ts';
import { validate } from '../middlewares/validate.middleware.ts';
import { registerSchema } from '../validators/auth.validator.ts';

const router = express.Router();

router.post('/register', validate(registerSchema), register);

export default router;
