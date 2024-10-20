import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        // Ensure the connection to MongoDB
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

export { connectDb }; // Use export for ES Modules
