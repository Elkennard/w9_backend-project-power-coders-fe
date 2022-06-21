import { pool } from "../index.js";

async function createFeedTable() {
  const res = await pool.query(
    `CREATE TABLE IF NOT EXISTS feedback (
        feedback_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        time TIMESTAMP,
        name TEXT,
        coach TEXT,        
        score INT
     );`
  );
  console.log(res.command);
}
//creates the named table above with column structure
//calls the function so script works (below)
createFeedTable();