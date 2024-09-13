# Tour IT Backend

## About

This repository contains the backend REST API for the Tour IT Planner application. Built with Express and MongoDB, it provides the server-side logic and data management for the Tour IT Planner frontend app.

- The frontend application repository can be found here: [Tour IT Frontend](https://github.com/tour-it-planner/tour-it-frontend).


## Instructions

To run the backend application on your local machine, follow these steps:

1. Clone

2. **Install dependencies**: npm install

3. **Create a .env file with the following environment variables
ORIGIN, with the location of your frontend app**: 

(example, ORIGIN=https://mycoolapp.netlify.com)

TOKEN_SECRET: used to sign auth tokens (example, TOKEN_SECRET=ilovepizza)
run the application: npm run dev or npm start


## API Endpoints:


## Auth endpoints


| HTTP Verb | Path               | Request Headers                  | Request Body                          | Description        |
|-----------|--------------------|----------------------------------|---------------------------------------|--------------------|
| POST      | /api/auth/signup   | –                                | `{ email: String, password: String }` | Create an account  |
| POST      | /api/auth/login    | –                                | `{ email: String, password: String }` | Login              |
| GET       | /api/auth/verify   | Authorization: Bearer `<jwt>`    | –                                     | Verify JWT         |


## Itineraries

| HTTP Verb | Path                          | Request Headers                  | Request Body                                                                       | Description          |
|-----------|-------------------------------|----------------------------------|------------------------------------------------------------------------------------|----------------------|
| POST      | /api/itineraries              | Authorization: Bearer `<jwt>`    | `{ title: String, description: String, details: [String], destinations:  ObjectId}`| Create new itinerary |
| GET       | /api/itineraries              | –                                | –                                                                                  | Get all itineraries  |
| GET       | /api/itineraries/:itineraryId | –                                | –                                                                                  | Get itinerary details|
| PUT       | /api/itineraries/:itineraryId | Authorization: Bearer `<jwt>`    | `{ title: String, description: String, details: [String], destinations:  ObjectId}`| Update a itinerary   |
| DELETE    | /api/itineraries/:itineraryId | Authorization: Bearer `<jwt>`    | –                                                                                  | Delete a itinerary   |

## Destinations

| HTTP Verb | Path                              | Request Headers                  | Request Body                                                  | Description                            |
|-----------|-----------------------------------|----------------------------------|---------------------------------------------------------------|----------------------------------------|
| POST      | /api/destinations                 | Authorization: Bearer `<jwt>`    | `{ location: String, description: String, imageUrl: String }` | Create new task                        |
| GET       | /api/destinations                 | –                                | –                                                             | Get all tasks (not implemented yet)    |
| GET       | /api/destinations/:destinationId  | –                                | –                                                             | Get task details (not implemented yet) |


## Demo

A demo of the REST API can be found here: https://tour-it.onrender.com