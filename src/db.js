import pg from "pg";
import { PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } from "./config.js";

export const pool = new pg.Pool({
  host: PG_HOST,
  port: PG_PORT,
  user: PG_USER,
  password: PG_PASSWORD,
  database: PG_DATABASE,
});

pool.on("connect", () => console.log("Database connected successfully :)"));
