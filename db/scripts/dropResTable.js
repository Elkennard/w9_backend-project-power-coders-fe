import { pool } from "../index.js";

async function dropResTable() {
  const res = await pool.query(
    `DROP TABLE IF EXISTS resources;`
  );
  console.log(res.command);
}
//drops the named table above
//calls the function so script works (below)
dropResTable();