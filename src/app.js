import express from "express";
import { config } from "dotenv";
config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Express.js API!",
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
