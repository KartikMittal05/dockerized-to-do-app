import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn=await mongoose.connect(process.env.Mongo_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1); // Exit the process with failure
    }
}