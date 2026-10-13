import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const PORT = process.env.PORT ||5001;
connectDB();

app.use(express.json()); // middleware: for using the req body


// next method is what runs after this callback runs. and this basically runs before any controller actually gets executed. 
app.use((req, res, next)=>{
    console.log(`request: ${req.method} and url: ${req.url}`);
    next();
})
app.use("/api/notes", notesRoutes);

app.listen(PORT, ()=>{
    console.log("run vayo reyyyy!!!")
})

