import express from "express";
import { configDotenv } from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import indexRouter from "./routes/index.js";
import cors from "cors";
configDotenv();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(clerkMiddleware());
app.use(express.json());
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

export default app;
