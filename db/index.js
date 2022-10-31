import pg from "pg";

/* Uses a pool instead of client to allow multiple connections

You need to create a .env file to store database credentials */

export const pool = new pg.Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT || 3001,
  ssl: { rejectUnauthorized: false },
});