import express from "express";

import {
  getAllResources,
  getResourcesByWeek,
  getResourcesByCat,
} from '../models/resources.js';

const resourcesRouter = express.Router();

export default resourcesRouter;
//import resources
//by week

// CRUD routes
//  get all ✅
// http://localhost:3000/resources
resourcesRouter.get("/", async function (req, res) {
  const result = await getAllResources();
  res.json({ success: true, message: "All resources", payload: result })
})

// get by week ✅
// http://localhost:3000/resources/week/1

resourcesRouter.get("/week/:id", async function (req, res) {
  const result = await getResourcesByWeek(req.params.id);
  res.json({ success: true, message: "Week resources", payload: result })
})

// by category ✅
// http://localhost:3000/resources/category/cat1
resourcesRouter.get("/category/:category", async function (req, res) {
  const result = await getResourcesByCat(req.params.category);
  res.json({ success: true, message: "Category resources", payload: result })
})