import { pool } from "../index.js";
import { populateFeedTable } from "../helpers.js";

try {
  await populateFeedTable();
  console.log("Populated 'feedback' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}