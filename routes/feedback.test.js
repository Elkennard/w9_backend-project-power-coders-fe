import {jest, expect, it, describe } from "@jest/globals";
import request from "supertest";
import app from "../app.js";
import { pool } from "../db/index.js";
import {resetFeedTable} from "../db/helpers.js"

beforeEach(async () => {
    await resetFeedTable();
      
  });

  describe("POST /feedback", () => {
    it("checks if the status code is 201 and checks that the response body matches an object with the structure { success: true, payload { id: 201, username: Craig }", async () => {
        const date = "2022-06-23T18:23:55.704Z";
      //ARRANGE
      const actual = await request(app)
                      .post("/feedback")
                      .set('Content-type', 'application/json')
                      .send({name: "Craig Summers", coach: "Rikkiah Williams", score: 4 } )
                      .expect(201);
        
      //ACT
     
      const expected = { success: true, message: "Feedback posted", payload: [{ feedback_id: 3, time: actual.body.payload[0].time, name: "Craig Summers", coach: "Rikkiah Williams", score: 4 }]};    
      //ASSERT
      expect(actual.body).toStrictEqual(expected);
     
    })  
  })

  afterAll(async () => {
    await pool.end();
  });
  