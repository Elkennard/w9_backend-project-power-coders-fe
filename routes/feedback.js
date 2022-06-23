import express from "express";

import { postUserFeedback, getUserFeedback } from "../models/feedback.js"

const feedbackRouter = express.Router();

// POST user score
// localhost:3000/feedback

feedbackRouter.post("/", async function (req, res) { 
    const result = await postUserFeedback(req.body);
    res.status(201).json({ success: true, message: "Feedback posted", payload: result })
})

feedbackRouter.get("/", async function (req, res) {
    const result = await getUserFeedback();
    res.json({ success: true, message: "All feedback", payload: result })
})

export default feedbackRouter;