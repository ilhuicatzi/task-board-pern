import express from "express";
import morgan from "morgan";
import tasksRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Settings
app.use(morgan("dev")); // morgan is a middleware
app.use(express.json()); // express.json() is a middleware
app.use(express.urlencoded({extended: false})); // express.urlencoded() is a middleware

// Routes
app.get("/", (req, res) => res.json({message: "Welcome to my application tasks"}));
app.use('/api', tasksRoutes);
app.use('/api', authRoutes);



app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
    })
})
export default app;