import { pool } from "../db/index.js";

// POST user feedback
//  will post current timestamp to date column

export async function postUserFeedback(feedback) {
    console.log(feedback);
    const getCurrentTime = new Date();
    const result = await pool.query(`INSERT INTO feedback (time, name, coach, score) VALUES ($1, $2, $3, $4) RETURNING *;`, [getCurrentTime, feedback.name, feedback.coach, feedback.score]);
    return result.rows;
}

export async function getUserFeedback() {    
       const result = await pool.query(`SELECT * FROM feedback`);
    return result.rows;
}