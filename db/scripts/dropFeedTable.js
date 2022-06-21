import { pool } from "../index.js";

async function dropFeedTable() {
  const res = await pool.query(
    `DROP TABLE IF EXISTS feedback;`
  );
  console.log(res.command);
}

dropFeedTable();