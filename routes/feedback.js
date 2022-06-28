import express from "express";
import { postUserFeedback, getUserFeedback } from "../models/feedback.js"

const FEEDBACK_ROUTER = express.Router();

// default path is localhost:3001/feedback
FEEDBACK_ROUTER.post("/", async function (req, res) { 
    const RESULT = await postUserFeedback(req.body);
    res.status(201).json({ success: true, message: "Feedback posted", payload: RESULT })
})

FEEDBACK_ROUTER.get("/", async function (req, res) {
    const RESULT = await getUserFeedback();
    res.json({ success: true, message: "All feedback", payload: RESULT })
})

export default FEEDBACK_ROUTER;