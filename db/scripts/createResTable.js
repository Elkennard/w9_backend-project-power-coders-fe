import { pool } from "../index.js";

async function createResTable() {
  const res = await pool.query(
    `CREATE TABLE IF NOT EXISTS resources (
        id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title TEXT,
        description TEXT,
        week INT,        
        category TEXT,        
        link TEXT,
        author TEXT,
        image_path TEXT
     );`
  );
  console.log(res.command);
}

//creates the named table above with column structure
//calls the function so script works (below)
createResTable();