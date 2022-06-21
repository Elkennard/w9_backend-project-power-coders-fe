import {resources} from "../../libs/resources.js";
import { pool } from "../index.js";

//async and takes from resourced and does for loop to generate data for the table
async function populateResTable() {
  for (let i = 0; i < resources.length; i++) {
    const res = await pool.query(
      `INSERT INTO resources (title, description, week, category, link, author, image_path) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
      [resources[i].title, resources[i].description, resources[i].week, resources[i].category,  resources[i].link, resources[i].author, resources[i].image_path]
    );
    console.log(res.rows[0], "inserted.");
  }
}

//calls the function immediately for the script
populateResTable();