import express from "express";
import dotenv from "dotenv";
import router from "./route/index.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo DB connected successfully"))
  .catch((error) => console.log("Mongodb connection error", error));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
