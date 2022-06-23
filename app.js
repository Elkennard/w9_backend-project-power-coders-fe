import express from 'express';
import path from 'path';

import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';

//imports router for the resources, it is named hence why it has been destuctured i.e {}
import { resourcesRouter }  from './routes/resources.js';
import feedbackRouter from './routes/feedback.js';


const app = express();
//we are using port 3000 by default do not change
const port = 3001

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//uses localhost:3000/resources
//and sends any requests to resourcesRouter
app.use('/resources', resourcesRouter);
app.use("/feedback", feedbackRouter);

//DO NOT DELETE THIS, otherwise server don't work
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//error code for if server not working
app.use(function (req, res, next) {
  res.status(404).json({message: "⛔ Page does not exist - please see the documentation for valid URI's 📓"})
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

export default app;