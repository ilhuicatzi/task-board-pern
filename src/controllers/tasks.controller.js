import { pool } from "../db.js";

export const getAllTasks = async(req, res, next) => {
    const result = await pool.query('SELECT * FROM task');
    //console.log(result.rows)
    return res.json(result.rows);
}

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    if (error.code == "23505") {
      return res.status(409).json({ message: "The task already exists" });
    }
    next(error);
  }
};

export const getTask = async (req, res) => {
    const result = await pool.query('SELECT * FROM task WHERE id = $1',[req.params.id]);

    if(result.rowCount === 0) {
        return res.status(404).json({message: "The task doesn't exists"})
    }
    return res.json(result.rows[0]);
}

export const updateTask = async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;

    const result = await pool.query(
        'UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *',
        [title, description, id]);

    if(result.rowCount === 0) {
        return res.status(404).json({message: "The task doesn't exists"})
    }
    return res.json(result.rows[0]);
}

export const deleteTask = async (req, res) => {
    const result = await pool.query('DELETE FROM task WHERE id = $1',[req.params.id]);

    if(result.rowCount === 0) {
        return res.status(404).json({message: "The task doesn't exists"})
    }
    return res.status(204).json({message: "Task deleted successfully"});
}