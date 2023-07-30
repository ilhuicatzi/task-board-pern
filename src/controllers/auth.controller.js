import bcrypt from "bcrypt";
import md5 from "md5";
import { pool } from "../db.js";
import { createAccessToken } from "../libs/jwt.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const gravatar = `https://www.gravatar.com/avatar/${md5(email)}`;
    const result = await pool.query(
      "INSERT INTO users (username, email, password, gravatar) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, email, hashedPassword, gravatar]
    );

    const token = await createAccessToken({ id: result.rows[0].id });

    res.cookie("token", token, {
        //httpOnly: true,
        secure: true, // only works on https,
        sameSite : "none",
        maxAge: 1000 * 60 * 60 , // 1 hour
    });

    return res.json({ message: "User created successfully", user: result.rows[0]});

  } catch (error) {
    if (error.code == "23505") {
      return res.status(409).json({ message: "The user already exists" });
    }
    next(error) // Pass error to the next middleware
  }
};

export const signin = async (req, res) => {
  const {email, password} = req.body

  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]);
  
  if (result.rowCount === 0) {
    return res.status(404).json({ message: "The user does not exist" });
  }

  const validPassword = await bcrypt.compare(password, result.rows[0].password);

  if (!validPassword) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = await createAccessToken({ id: result.rows[0].id });

  res.cookie("token", token, {
      //httpOnly: true,
      secure: true, // only works on https,
      sameSite : "none",
      maxAge: 1000 * 60 * 60 , // 1 hour
  });

  return res.json({ message: "User logged successfully", user: result.rows[0]});

}

export const signout = (req, res) => {
  res.clearCookie("token");
  return res.json({ message: "User logged out successfully" });
}

export const profile = async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE id = $1",
    [req.userId]);

  return res.json({ user: result.rows[0] });
}
