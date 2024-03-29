import express from "express";
import cors from "cors";
import apiRoute from "./routes/user.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", apiRoute);

app.listen(5000, () => {
  console.log("Server Logging In PORT: 5000");
});
