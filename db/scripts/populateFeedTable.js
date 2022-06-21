// import {resources} from "../../libs/resources.js";
import { pool } from "../index.js";

async function populateFeedTable() {
  for (let i = 0; i < feedback.length; i++) {
    const res = await pool.query(
      `INSERT INTO feedback (title, description, category, week, link, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [feedback[i].bootcamper_id, feedback[i].name, feedback[i].coach, feedback[i].scores]
    );
    console.log(res.rows[0], "inserted.");
  }
}

populateFeedTable();