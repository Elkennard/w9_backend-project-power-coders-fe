import { pool } from "../index.js";
import { dropResTable } from "../helpers.js";

try {
  await dropResTable();
  console.log("Dropped 'resources' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
