import { pool } from "../index.js";
import { createResTable } from "../helpers.js";

try {
  await createResTable();
  console.log("Created 'resources' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}

