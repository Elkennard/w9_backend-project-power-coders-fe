import pg from "pg";

/* Uses a pool instead of client to allow multiple connections

You need to create a .env file to store database credentials */

export const pool = new pg.Pool({
  connectionString: process.env.connectionString,
    ssl: {rejectUnauthorized: false}
});