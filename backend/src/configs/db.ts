import mongoose from 'mongoose';

export const connectDB = async () => {
    const uri = process.env.MONGODB_URL;

    if (!uri) throw new Error('MONGODB_URL is not set');

    try {
        await mongoose.connect(uri);
        console.log('✅ Connect MongoDb successfully');
    } catch (error) {
        console.log('❌ Connect MongoDb failed');
        throw error;
    }
};
