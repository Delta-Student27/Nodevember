import express from "express";
import serverless from "serverless-http";
import connectDB from "./config/db.js";

import authRoutes from "./routes/user.route.js";
import bookRoutes from "./routes/book.route.js";
import orderRoutes from "./routes/order.route.js";
import aiRoutes from "./routes/ai.route.js";

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Bookstore API is running successfully on Vercel!");
});

app.use("/api/auth", authRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/ai", aiRoutes);

// 👇 This replaces app.listen()
export const handler = serverless(app);
