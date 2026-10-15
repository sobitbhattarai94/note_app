// package imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";


// local imports
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
// connectDB(); // here this line is for connecting with db. the problem? => the server starts first then the connection happens which is not recommended, so we use .then to wrap the server start call back inside of the  connectdb .then (look below)

app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);
app.use(express.json()); // middleware: for using the req body
// next method is what runs after this callback runs. and this basically runs before any controller actually gets executed.
// app.use((req, res, next)=>{
//     console.log(`request: ${req.method} and url: ${req.url}`);
//     next();
// }) // this was just for understanding purposes. so wont actually be using this one for now
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("run vayo reyyyy!!!");
  });
});
