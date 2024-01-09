import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";


const app = express();

mongoose.connect(
  "mongodb+srv://pk:1234@cluster0.ltdvj2y.mongodb.net/?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
);
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);



app.listen(3001, () => console.log("Server started"));