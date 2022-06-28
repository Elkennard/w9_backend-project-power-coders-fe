import { pool } from "./index.js";
import { RESOURCES } from "../libs/resources.js";
import { FEEDBACK } from "../libs/feedback.js";

export async function createResTable() {
  const SQL_STRING = `CREATE TABLE IF NOT EXISTS resources (
      id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      title TEXT,
      description TEXT,
      week INT,        
      category TEXT,        
      link TEXT,
      author TEXT,
      image_path TEXT
   );`;
  const RES = await pool.query(SQL_STRING);
  console.log(RES.command);
}

export async function dropResTable() {
  const SQL_STRING = `DROP TABLE IF EXISTS resources;`;
  const RES = await pool.query(SQL_STRING);
  console.log(RES.command);
}

export async function populateResTable() {
  const SQL_STRING = `INSERT INTO resources (title, description, week, category, link, author, image_path) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

  for (let i = 0; i < RESOURCES.length; i++) {
    const VALUES = [
      RESOURCES[i].title,
      RESOURCES[i].description,
      RESOURCES[i].week,
      RESOURCES[i].category,
      RESOURCES[i].link,
      RESOURCES[i].author,
      RESOURCES[i].image_path,
    ];
    const RES = await pool.query(SQL_STRING, VALUES);
    console.log(RES.rows[0], "inserted.");
  }
}

export async function resetResTable() {
  return [
    await dropResTable(),
    await createResTable(),
    await populateResTable(),
  ];
}

export async function createFeedTable() {
  const SQL_STRING = `CREATE TABLE IF NOT EXISTS feedback (
        feedback_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        time TIMESTAMP,
        name TEXT,
        coach TEXT,        
        score INT
    );`;
  const RES = await pool.query(SQL_STRING);
  console.log(RES.command);
}

export async function dropFeedTable() {
  const SQL_STRING = `DROP TABLE IF EXISTS feedback;`;
  const RES = await pool.query(SQL_STRING);
  console.log(RES.command);
}

export async function populateFeedTable() {
  const GET_CURRENT_TIME = new Date();
  const SQL_STRING = `INSERT INTO feedback (time, name, coach, score) VALUES ($1, $2, $3, $4) RETURNING *;`;
  for (let i = 0; i < FEEDBACK.length; i++) {
    const VALUES = [
      GET_CURRENT_TIME,
      FEEDBACK[i].name,
      FEEDBACK[i].coach,
      FEEDBACK[i].score,
    ];
    const RES = await pool.query(SQL_STRING, VALUES);
    console.log(RES.rows[0], "inserted.");
  }
}

export async function resetFeedTable() {
  return [
    await dropFeedTable(),
    await createFeedTable(),
    await populateFeedTable(),
  ];
}
