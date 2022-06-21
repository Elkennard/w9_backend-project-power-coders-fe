import {feedback} from "../../libs/feedback.js";
import { pool } from "../index.js";

async function populateFeedTable() {
  for (let i = 0; i < feedback.length; i++) {
    const res = await pool.query(
      `INSERT INTO feedback (name, coach, scores) VALUES ($1, $2, $3) RETURNING *;`,
      [feedback[i].name, feedback[i].coach, feedback[i].scores]
    );
    console.log(res.rows[0], "inserted.");
  }
}

populateFeedTable();