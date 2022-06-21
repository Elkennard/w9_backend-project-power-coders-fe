import { pool } from "../index.js";

async function dropFeedTable() {
  const res = await pool.query(
    `DROP TABLE IF EXISTS feedback;`
  );
  console.log(res.command);
}

//drops the named table above
//calls the function so script works (below)
dropFeedTable();