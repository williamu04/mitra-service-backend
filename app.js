import express from "express";
import { configDotenv } from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import index from './routes/index.js';
configDotenv();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(clerkMiddleware());
app.use(express.json());
app.use('/', index)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

export default app;