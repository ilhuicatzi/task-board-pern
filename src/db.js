import pg from "pg";

export const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "ilhuicatzi.root",
  database: "tasksDB",
});

pool.on("connect", () => console.log("Database connected successfully :)"));
