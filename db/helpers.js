import { pool } from "./index.js";
import { resources } from "../libs/resources.js";
import {feedback} from "../libs/feedback.js";

//creates the named table above with column structure

export async function createResTable() {
    const res = await pool.query(
      `CREATE TABLE IF NOT EXISTS resources (
          id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
          title TEXT,
          description TEXT,
          week INT,        
          category TEXT,        
          link TEXT,
          author TEXT,
          image_path TEXT
       );`
    );
    console.log(res.command);
  }
//drops the named table above
  export async function dropResTable() {
    const res = await pool.query(
      `DROP TABLE IF EXISTS resources;`
    );
    console.log(res.command);
  }

  //async and takes from resourced and does for loop to generate data for the table
export async function populateResTable() {
    for (let i = 0; i < resources.length; i++) {
      const res = await pool.query(
        `INSERT INTO resources (title, description, week, category, link, author, image_path) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
        [resources[i].title, resources[i].description, resources[i].week, resources[i].category,  resources[i].link, resources[i].author, resources[i].image_path]
      );
      console.log(res.rows[0], "inserted.");
    }
  }
  
  // reset Resources Table

  export async function resetResTable() {
    return [
      await dropResTable(),
      await createResTable(),
      await populateResTable(),
    ];
  }

  // Feedback table helpers

  //creates the named table with column structure
  export async function createFeedTable() {
    const res = await pool.query(
      `CREATE TABLE IF NOT EXISTS feedback (
          feedback_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
          time TIMESTAMP,
          name TEXT,
          coach TEXT,        
          score INT
       );`
    );
    console.log(res.command);
  }

//drops the named table 
  
  export async function dropFeedTable() {
    const res = await pool.query(
      `DROP TABLE IF EXISTS feedback;`
    );
    console.log(res.command);
  }

// Populates the feed table with mock data
// async populates the heroku db with stuff from feedback via a for loop

  export async function populateFeedTable() {
    const getCurrentTime = new Date();
    for (let i = 0; i < feedback.length; i++) {
      const res = await pool.query(
        `INSERT INTO feedback (time, name, coach, score) VALUES ($1, $2, $3, $4) RETURNING *;`,
        [getCurrentTime, feedback[i].name, feedback[i].coach, feedback[i].score]
      );
      console.log(res.rows[0], "inserted.");
    }
  }

    // reset Feedback Table

    export async function resetFeedTable() {
        return [
          await dropFeedTable(),
          await createFeedTable(),
          await populateFeedTable(),
        ];
      }
    
  

  
  

  