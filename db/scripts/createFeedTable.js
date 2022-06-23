import { pool } from "../index.js";
import { createFeedTable } from "../helpers.js";

try {
  await createFeedTable();
  console.log("Created 'feedback' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}

