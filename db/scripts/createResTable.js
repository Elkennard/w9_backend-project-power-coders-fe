import { pool } from "../index.js";

async function createResTable() {
  const res = await pool.query(
    `CREATE TABLE IF NOT EXISTS resources (
        id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title TEXT,
        description TEXT,        
        category TEXT,
        week INT,
        link TEXT,
        image TEXT
     );`
  );
  console.log(res.command);
}

createResTable();