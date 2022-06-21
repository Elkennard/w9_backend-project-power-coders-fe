import express from "express";

import { postUserFeedback } from "../models/feedback.js"

const feedbackRouter = express.Router();

// POST user score
// localhost:3000/feedback

feedbackRouter.post("/", async function (req, res) { 
    const result = await postUserFeedback(req.body);
    res.json({ success: true, message: "Feedback posted", payload: result })
})

export default feedbackRouter;