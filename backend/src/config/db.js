import mongoose from "mongoose"

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongodb connected successfully!");
    }catch(e){
        console.error("error connecting to mongodb: ", e);
        process.exit(1); // 1 is for error, 0 for success
    }
}

export {connectDB}