import bcrypt from "bcrypt";
import { pool } from "../db.js";
import { createAccessToken } from "../libs/jwt.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashedPassword]
    );

    const token = await createAccessToken({ id: result.rows[0].id });

    res.cookie("token", token, {
        httpOnly: true,
        // secure: true, // only works on https,
        sameSite : "none",
        maxAge: 1000 * 60 * 60 , // 1 hour
    });

    return res.json({ message: "User created successfully", user: result.rows[0]});

  } catch (error) {
    if (error.code == "23505") {
      return res.status(409).json({ message: "The user already exists" });
    }
  }
};

export const signin = (req, res) => res.send("Signin Form");

export const signout = (req, res) => res.send("Signout");

export const profile = (req, res) => res.send("Profile");
