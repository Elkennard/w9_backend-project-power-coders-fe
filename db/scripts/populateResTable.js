import { pool } from "../index.js";
import { populateResTable } from "../helpers.js";

try {
  await populateResTable();
  console.log("Populated 'resources' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}