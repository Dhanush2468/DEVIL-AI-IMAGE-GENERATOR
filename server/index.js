import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from './routes/postRoutes.js'
import devilRoutes from './routes/devilRoutes.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
// // Routes
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/devil', devilRoutes);

app.get("/", async (req, res) => {
  res.send("Hello From DEVIL-AI!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () =>
      console.log("Server started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
