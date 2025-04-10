import { clerkClient, requireAuth } from "@clerk/express";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/public", (req, res) => {
  res.send("Hello Public!");
});

router.get("/test", (req, res) => {
  res.status(200).json({ message: "Hello from test route!" });
});

router.get("/private", requireAuth(), async (req, res) => {
  const userId = req.auth?.userId;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await clerkClient.users.getUser(userId);

    // Dapatkan username atau nama lain
    const username = user.username; // opsional, bisa juga `user.firstName`, `user.emailAddresses[0].emailAddress`, dll

    res.json({
      userId: user.id,
      username,
      email: user.emailAddresses[0]?.emailAddress,
    });
  } catch (err) {
    console.error("Failed to fetch user", err);
    res.status(500).json({ message: "Error fetching user info" });
  }
});

export default router;
