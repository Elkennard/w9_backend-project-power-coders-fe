import { pool } from "./index.js";
import { resources } from "../libs/resources.js";

//creates the named table above with column structure

export async function createResTable() {
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
//drops the named table above
  export async function dropResTable() {
    const res = await pool.query(
      `DROP TABLE IF EXISTS resources;`
    );
    console.log(res.command);
  }

  //async and takes from resourced and does for loop to generate data for the table
export async function populateResTable() {
    for (let i = 0; i < resources.length; i++) {
      const res = await pool.query(
        `INSERT INTO resources (title, description, week, category, link, author, image_path) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
        [resources[i].title, resources[i].description, resources[i].week, resources[i].category,  resources[i].link, resources[i].author, resources[i].image_path]
      );
      console.log(res.rows[0], "inserted.");
    }
  }
  
  export async function resetResTable() {
    return [
      await dropResTable(),
      await createResTable(),
      await populateResTable(),
    ];
  }
  
  

  