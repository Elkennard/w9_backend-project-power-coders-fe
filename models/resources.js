//imports pool otherwise functions won't work
import { pool } from "../db/index.js";

//get all resources
export async function getAllResources() {
    const result = await pool.query(`SELECT * FROM resources;`);
    // console.log(result);
    return result.rows;
};
//get all by week
export async function getResourcesByWeek(id) {
    const result = await pool.query(`SELECT * FROM resources WHERE week = $1;`, [id]);
    // console.log(result);
    return result.rows;
};
//get all by category
export async function getResourcesByCat(category) {
    const result = await pool.query(`SELECT * FROM resources WHERE LOWER(category) = LOWER($1);`,[category]);
    // console.log(result);
    return result.rows;
};