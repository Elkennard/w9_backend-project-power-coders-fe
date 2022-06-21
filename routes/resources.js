//imports for us to use server
import express from "express";

//imports all the sql logic/models from models folder
import {
  getAllResources,
  getResourcesByWeek,
  getResourcesByCat,
} from '../models/resources.js';

//named router
export const resourcesRouter = express.Router();

// CRUD routes
// this fn gets all resources
// http://localhost:3000/resources
resourcesRouter.get("/", async function (req, res) {
  const result = await getAllResources();
  res.json({ success: true, message: "All resources", payload: result })
})

// this fn gets all resources by week
// http://localhost:3000/resources/week/1

resourcesRouter.get("/week/:id", async function (req, res) {
  const result = await getResourcesByWeek(req.params.id);
  res.json({ success: true, message: "Week resources", payload: result })
})

// this fn gets all resources by category
// http://localhost:3000/resources/category/cat1
resourcesRouter.get("/category/:category", async function (req, res) {
  const result = await getResourcesByCat(req.params.category);
  res.json({ success: true, message: "Category resources", payload: result })
})