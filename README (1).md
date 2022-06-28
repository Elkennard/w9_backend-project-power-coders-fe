
# SOC WELLBEING TOOLKIT - BACK-END

This is the back-end to the School of Code Wellbeing Toolkit. A culmination of all the information provided by Joseph Trodden for the SoC Mindset Thursday Sessions.

The back-end creates and populates tables on a postgres database hosted on Heroku.  It also serves as an API for our front-end. 
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

[Front-end](https://github.com/SchoolOfCode/w9_frontend-project-power-coders-fe)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Appendix

Any additional information goes here


## Authors

- [@katherinepeterson](https://www.github.com/octokatherine)


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

