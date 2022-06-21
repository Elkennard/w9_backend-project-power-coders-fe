import {resources} from "../../libs/resources.js";
import { pool } from "../index.js";

async function populateResTable() {
  for (let i = 0; i < resources.length; i++) {
    const res = await pool.query(
      `INSERT INTO resources (title, description, category, week, link, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [resources[i].title, resources[i].description, resources[i].category, resources[i].week, resources[i].link, resources[i].image]
    );
    console.log(res.rows[0], "inserted.");
  }
}

populateResTable();