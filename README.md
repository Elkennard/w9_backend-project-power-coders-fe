
![Logo](https://raw.githubusercontent.com/SchoolOfCode/w9_backend-project-power-coders-fe/main/public/images/logo.PNG)

# SOC WELLBEING TOOLKIT - BACK-END

The SoC Wellbeing Toolkit helps bootcampers manage their wellbeing using tools and resources in one handy location.

This is the back-end documentation for the app.

The back-end creates and populates tables on a postgres database.  It also serves as an API for the front-end. 

Looking for the [Front-end?](https://github.com/SchoolOfCode/w9_frontend-project-power-coders-fe)
## Installation

```bash
  git clone https://github.com/SchoolOfCode/w9_backend-project-power-coders-fe.git
  
  cd w9_backend-project-power-coders-fe
  
  npm i
```
## Environment Variables

To run this project, you will need to add a .env file to the root with the following environment variables.

`PGHOST`

`PGDATABASE`

`PGUSER`

`PGPASSWORD`

`PGPORT`

Assign these variables to your relevant database credentials.

## Database Setup

To initialise and populate the database, run the following commands:

```bash
  npm run db:resetResTable

  npm run db:resetFeedTable
```
## Documentation
This is not yet deployed, so only works on localhost:3001 (back-end).

To run the back end:

```bash
  npm run dev
```


## API Reference

### Resources

#### Get all resources

```http
  GET /resources
```

- ##### Sample Request

```bash
    fetch("http://localhost:3001/resources")
```

- ##### Sample Response

```bash
    {success: true, message: "", payload: [
        {
        "id":1,"title":"Hero's Journey",
        "description":"SoC is designed to challenge you. There may be times of doubt...",
        "week":1,
        "category":"Resilience",
        "link":"https://www.mybestself101.org/blog/2021/2/2/adventure-mindset-the-heros-journey",
        "author":"Joseph Trodden",
        "image_path":"1_hero_journey.png"},
    },
    ...]}
```

#### Get all resources by week

```http
  GET /resources/week/${weekNumber}
```

- ##### Sample Request

```bash
    fetch("http://localhost:3001/resources/week/2")
```

- ##### Sample Response

```bash
    {"success": true,"message": "Week resources","payload":[ 
        {
        "id":2,
        "title":"Myers Briggs",
        "description":"There are different types of people in the bootcamp and in the coding industry...",
        "week":2,
        "category":"Personality",
        "link":"https://www.verywellmind.com/the-myers-briggs-type-indicator-2795583",
        "author":"Joseph Trodden",
        "image_path":"2_personality_types.png"
        }
    ]}
```

#### Get all resources by category

```http
  GET /resources/category/${categoryName}
```

- ##### Sample Request

```bash
    fetch("http://localhost:3001/category/resilience")
```

- ##### Sample Response

```bash
    {"success":true,"message":"Category resources","payload":[
        {
        "id":1,
        "title":"Hero's Journey",
        "description":"SoC is designed to challenge you. There may be times of doubt and uncertainty... ",
        "week":1,
        "category":"Resilience",
        "link":"https://www.mybestself101.org/blog/2021/2/2/adventure-mindset-the-heros-journey",
        "author":"Joseph Trodden",
        "image_path":"1_hero_journey.png"
        }
    ]};
```

### Feedback

#### Create new feedback post

```http
  POST /feedback
```

- ##### Sample Request

```bash
    fetch("http://localhost:3001/feedback", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: {
        "name": "Craig Summers",
        "coach": "Rikkiah Williams",
        "score": 3
        }
    });
```

- ##### Sample Response

```bash
    {"success": true, "message": "Feedback posted", "payload": [
        {
        "feedback_id": 5,
        "time": "2022-06-28T15:19:18.547Z",
        "name": "Craig Summers",
        "coach": "Rikkiah Williams",
        "score": 3
        }
    ]
}
```

#### Get all feedback

```http
  GET /feedback
```

- ##### Sample Request

```bash
    fetch("http://localhost:3001/feedback")
```

- ##### Sample Response

```bash
    {
    "success": true,
    "message": "All feedback",
    "payload": [
        {
            "feedback_id": 1,
            "time": "2022-06-28T10:48:37.480Z",
            "name": "Craig",
            "coach": "Rikki",
            "score": 8
        },
        {
            "feedback_id": 2,
            "time": "2022-06-28T10:48:37.480Z",
            "name": "Rajesh",
            "coach": "Vicki",
            "score": 7
        },
    }

```




## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Tech Stack

**Server:** Node, Express, PostgreSQL


## Appendix

CRUD routes currently not used by Front-end:

- Get /resources
- Get /resources/category/${categoryName}
- Get /feedback


## Authors

- [@Abdullatif Farah](https://github.com/Afrosweetness2002)
- [@Craig Summers](https://github.com/AlphaPentagon)
- [@Dave Hazeldean](https://github.com/dvhzldn)
- [@Emma Kennard](https://github.com/Elkennard)
- [@Rajesh Reel](https://github.com/Rajesh-Reel)


## Acknowledgements

 - [Joseph Trodden](https://www.linkedin.com/in/josephtrodden/?originalSubdomain=uk)
 
 Documentation created using [readme.so](https://readme.so/)

