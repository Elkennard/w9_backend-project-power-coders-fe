import { pool } from "../db/index.js";

export async function postUserFeedback(feedback) {
  const SQL_STRING = `INSERT INTO feedback (time, name, coach, score) VALUES ($1, $2, $3, $4) RETURNING *;`;
  const GET_CURRENT_TIME = new Date();
  const VALUES = [
    GET_CURRENT_TIME,
    feedback.name,
    feedback.coach,
    feedback.score,
  ];
  const RESULT = await pool.query(SQL_STRING, VALUES);
  return RESULT.rows;
}

export async function getUserFeedback() {
  const SQL_STRING = `SELECT * FROM feedback`;
  const RESULT = await pool.query(SQL_STRING);
  return RESULT.rows;
}