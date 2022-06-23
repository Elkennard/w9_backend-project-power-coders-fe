import { expect, it, describe } from "@jest/globals";
import request from "supertest";
import app from "../app.js";
import { pool } from "../db/index.js";
import {resetResTable} from "../db/helpers.js"

beforeEach(async () => {
  await resetResTable();
    
});

describe("GET /resources", () => {
  it("checks if the status code is 200", async () => {
    //ARRANGE
    const response = await request(app).get("/resources/");
   
    const actual = response.status;
   
    //ACT
    const expected = 200;
    //ASSERT
    expect(actual).toBe(expected);
  });
  it("checks if the response body is an array of objects with the structure  {success: true, message: All resources payload:  {id: any number, title: any string, description: any string, week: any number, category: any string, link: any string, author: any string, image_path: any string }}", async () => {
    //ARRANGE
    const response = await request(app).get("/resources");
    const actual = response.body;
    //ACT
    const expected = {
      success: true,
      message: "All resources",
      payload: expect.not.arrayContaining([
        expect.not.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          description: expect.any(String),
          week: expect.any(Number),
          category: expect.any(String),
          link: expect.any(String),
          author: expect.any(String),
          image_path: expect.any(String),
        }),
      ]),
    };
    expect(actual).toStrictEqual(expected);
  });
});

describe("GET /resources/week/1", () => {
  it("checks if the status code is 200", async () => {
    //ARRANGE
    const response = await request(app).get("/resources/week/1");
    const actual = response.status;
    //ACT
    const expected = 200;
    //ASSERT
    expect(actual).toBe(expected);
  });
  it("checks if the response body is an array of objects with the structure  {success: true, message: All resources payload:  {id: any number, title: any string, description: any string, week: 1, category: any string, link: any string, author: any string, image_path: any string }}", async () => {
    //ARRANGE
    const response = await request(app).get("/resources/week/1");
    const actual = response.body;
    //ACT
    const expected = {
      success: true,
      message: "Week resources",
      payload: expect.not.arrayContaining([
        expect.not.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          description: expect.any(String),
          week: 1,
          category: expect.any(String),
          link: expect.any(String),
          author: expect.any(String),
          image_path: expect.any(String),
        }),
      ]),
    };
    expect(actual).toStrictEqual(expected);
  });
});

describe("GET /resources/category/resilience", () => {
    it("checks if the status code is 200", async () => {
      //ARRANGE
      const response = await request(app).get("/resources/category/resilience");
      const actual = response.status;
      //ACT
      const expected = 200;
      //ASSERT
      expect(actual).toBe(expected);
    });
    it("checks if the response body is an array of objects with the structure  {success: true, message: All resources payload:  {id: any number, title: any string, description: any string, week: any number, category: resilience, link: any string, author: any string, image_path: any string }}", async () => {
      //ARRANGE
      const response = await request(app).get("/resources/category/resilience");
      const actual = response.body;
      //ACT
      const expected = {
        success: true,
        message: "Category resources",
        payload: expect.not.arrayContaining([
          expect.not.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            description: expect.any(String),
            week: expect.any(Number),
            category: "Resilience",
            link: expect.any(String),
            author: expect.any(String),
            image_path: expect.any(String),
          }),
        ]),
      };
      expect(actual).toStrictEqual(expected);
    });
  });
  
  afterAll(async () => {
    await pool.end();
  });
