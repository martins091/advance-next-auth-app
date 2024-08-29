import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);

    if(initialized) {
        console.log('Database is already connected.');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName:"next auth app",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongodb connected')
        initialized = true;
    }catch (error){
        console.log('MongoDB connection error:', error);
    }
}