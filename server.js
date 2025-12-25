// server.js
import dotenv from "dotenv";
dotenv.config();
import express from "express";

import mongoose from "mongoose";
import cors from "cors";

import chatRoute from "./Routes/chatRoute.js";


import authRoute from "./Routes/authRoute.js";




const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoute);

app.use("/api/chat", chatRoute); 

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(" MongoDB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
