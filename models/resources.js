import { pool } from "../db/index.js";
//get all resources
export async function getAllResources() {
    const result = await pool.query(`SELECT * FROM resources;`);
    console.log(result);
    return result.rows;
};
//get all by week
export async function getResourcesByWeek(id) {
    const result = await pool.query(`SELECT * FROM resources WHERE week = $1;`, [id]);
    console.log(result);
    return result.rows;
};
//get all by category
