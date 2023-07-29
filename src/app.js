import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev")); // morgan is a middleware
app.use(express.json()); // express.json() is a middleware
app.use(express.urlencoded({extended: false})); // express.urlencoded() is a middleware

app.get("/", (req, res) => res.json({message: "Welcome to my application tasks"}));

app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
    })
})
export default app;