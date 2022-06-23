import { pool } from "../index.js";
import { dropFeedTable } from "../helpers.js";

try {
  await dropFeedTable();
  console.log("Dropped 'feedback' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
