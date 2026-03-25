# To-Do List API

//Description

A RESTful API for managing tasks built using Node.js, Express, and MongoDB.

//Features

* Create tasks
* View all tasks
* Update tasks
* Mark tasks as completed
* Delete tasks

// Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Jest (for testing)

//Installation

```bash
npm install
npm run dev
```

// API Endpoints

| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| POST   | /tasks              | Create a task    |
| GET    | /tasks              | Get all tasks    |
| PUT    | /tasks/:id          | Update task      |
| PATCH  | /tasks/:id/complete | Mark as complete |
| DELETE | /tasks/:id          | Delete task      |

// Validation

* Task title cannot be empty
* Cannot mark a task as completed twice

// Testing

Run tests using:

```bash
npm test
```

// Key Decisions

* Used MongoDB for flexible data storage
* Followed MVC architecture
* Implemented RESTful API design
* Added basic unit testing using Jest

//Author
Kratisha Hiran
