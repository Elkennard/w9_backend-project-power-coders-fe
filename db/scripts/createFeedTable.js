import { pool } from "../index.js";

async function createFeedTable() {
  const res = await pool.query(
    `CREATE TABLE IF NOT EXISTS feedback (
        bootcamper_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name TEXT,
        coach TEXT,        
        scores INT
     );`
  );
  console.log(res.command);
}

createFeedTable();