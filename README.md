# Mindset Toolkit Backend

This repo contains the backend code for the SoC Mindset Toolkit Backend, which follows the RESTful API principles.

## Database

- Hosted in Heroku
- 2 tables
    - Resources
        - *id
        - title
        - description
        - week
        - category
        - link
        - author
        - image_path
    - Feedback
        - *feedback_id
        - time
        - name
        - coach
        - score

## Routers

- Main path
    - localhost:3000

- ResourcesRouter
- /resources
    - GET all resources
- /resources/week/*week_number*
    - GET resources by *week_number*
- /resources/category/*category_name*
    - GET resources by *category_name*

- FeedbackRouter
- /feedback
    - POST user feedback

## Responses

- All responses from the API return a JSON object, or an array of JSON objects, with properties key names that match the relevant table columns
    - e.g. GET resources by week 1
        - returns {id: VALUE, title: VALUE, description: VALUE, week: VALUE, category: VALUE, link: VALUE, author: VALUE, image_path: VALUE}

        
