import mongoose from "mongoose"

const connectDB = async () => {
    try{
        await mongoose . connect (
        
            "mongodb+srv://kokilasmily:j9VOXIS7ogm7mIo5@cluster0.t1yyj9y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
            console.log (" MongoDB connected...");
        }
    catch(error){
        console . error(error.message);
        process.exit(1);
    }
}

export default connectDB;