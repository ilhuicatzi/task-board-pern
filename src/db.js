import pg from "pg";
import { PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD } from "./config.js";

export const pool = new pg.Pool({
  host: PGHOST,
  port: PGPORT,
  user: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
});

pool.on("connect", () => console.log("Database connected successfully :)"));
