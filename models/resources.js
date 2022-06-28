import { pool } from "../db/index.js";

export async function getAllResources() {
  const SQL_STRING = `SELECT * FROM resources;`;
  const RESULT = await pool.query(SQL_STRING);
  return RESULT.rows;
}

export async function getResourcesByWeek(weekNumber) {
  const SQL_STRING = `SELECT * FROM resources WHERE week = $1;`;
  const VALUES = [weekNumber];
  const RESULT = await pool.query(SQL_STRING, VALUES);
  return RESULT.rows;
}

export async function getResourcesByCategory(categoryName) {
  const SQL_STRING = `SELECT * FROM resources WHERE LOWER(category) = LOWER($1);`;
  const VALUES = [categoryName];
  const RESULT = await pool.query(SQL_STRING, VALUES);
  return RESULT.rows;
}
