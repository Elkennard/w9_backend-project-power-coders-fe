import express from "express";

import {
  getAllResources,
  getResourcesByWeek,
  getResourcesByCategory,
} from "../models/resources.js";

export const RESOURCES_ROUTER = express.Router();

// path is http://localhost:3001/resources
RESOURCES_ROUTER.get("/", async function (req, res) {
  const RESULT = await getAllResources();
  res.json({ success: true, message: "All resources", payload: RESULT });
});

RESOURCES_ROUTER.get("/week/:id", async function (req, res) {
  const RESULT = await getResourcesByWeek(req.params.id);
  res.json({ success: true, message: "Week resources", payload: RESULT });
});

RESOURCES_ROUTER.get("/category/:category", async function (req, res) {
  const RESULT = await getResourcesByCategory(req.params.category);
  res.json({ success: true, message: "Category resources", payload: RESULT });
});
