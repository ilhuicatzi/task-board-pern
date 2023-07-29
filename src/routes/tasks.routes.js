import { Router } from "express";

const router = Router();

router.get("/tasks", (req, res) => res.json({message: "Get all tasks"}));

router.get("/tasks/:id", (req, res) => res.json({message: "Get a task"}));

router.post("/tasks", (req, res) => res.json({message: "Create a task"}));

router.put("/tasks/:id", (req, res) => res.json({message: "Update a task"}));

router.delete("/tasks/:id", (req, res) => res.json({message: "Delete a task"}));

export default router;