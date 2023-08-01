import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import tasksRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { pool } from "./db.js";
import { ORIGIN } from "./config.js";

const app = express();

// Settings
app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
  })
);
app.use(morgan("dev")); // morgan is a middleware
app.use(cookieParser()); // cookieParser is a middleware
app.use(express.json()); // express.json() is a middleware
app.use(express.urlencoded({ extended: false })); // express.urlencoded() is a middleware

// Routes
app.get("/", (req, res) =>
  res.json({ message: "Welcome to my application tasks" })
);

app.get("/api/ping", async (req, res) => {
  console.log("Received a ping request");
  await pool.query("SELECT NOW()", (err, result) => {
    if (err) {
      console.log("Error while querying", err);
      throw err;
    }
    console.log("Query successful");
    res.json({ message: `Database responded at ${result.rows[0].now}` });
  });
});

app.use("/api", tasksRoutes);
app.use("/api", authRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});
export default app;
