import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.ts';
import { connectDB } from './configs/db.ts';
import { errorHandler } from './middlewares/error.middleware.ts';

const app = express();

dotenv.config();
app.use(express.json());

console.log('--------------🎒 🏕️  🗺️  ✈️  🛍️  📸 🎧 🎫 -----------------');

const PORT: number | string = process.env.PORT || 3001;

app.use('/auth', authRouter);

app.use(errorHandler);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🌐 Server running in http://localhost:${PORT}`);
    });
});
