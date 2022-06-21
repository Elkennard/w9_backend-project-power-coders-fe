import {feedback} from "../../libs/feedback.js";
import { pool } from "../index.js";

//Populates the feed table with mock data
async function populateFeedTable() {
  const getCurrentTime = new Date();
  for (let i = 0; i < feedback.length; i++) {
    const res = await pool.query(
      `INSERT INTO feedback (time, name, coach, score) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [getCurrentTime, feedback[i].name, feedback[i].coach, feedback[i].score]
    );
    console.log(res.rows[0], "inserted.");
  }
}

populateFeedTable();