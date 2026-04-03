# To-Do List API

A RESTful API for managing tasks built using Node.js, Express, and MongoDB. This project allows users to create, update, delete, and track tasks efficiently.

##  Features
* Create tasks
* View all tasks
* Update tasks
* Mark tasks as completed
* Delete tasks

##  Tech Stack
* Node.js
* Express.js
* MongoDB
* Mongoose
* Jest (for testing)
* ## Test Output

All tests passing 

##  Folder Structure

controllers/
models/
routes/

## Installation & Setup
```bash
git clone https://github.com/kratisha434/to-do-app.git
cd to-do-app
npm install
```
### Setup Environment Variables
Create a `.env` file in the root:

MONGO_URI=your_mongodb_connection_string
PORT=5000

### Run the Server
```bash
npm run dev
```

##  API Endpoints

| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| POST   | /tasks              | Create a task    |
| GET    | /tasks              | Get all tasks    |
| PUT    | /tasks/:id          | Update task      |
| PATCH  | /tasks/:id/complete | Mark as complete |
| DELETE | /tasks/:id          | Delete task      |

---

## 📥 Example Request

### Create Task

```json
POST /tasks
{
  "title": "Learn Node.js"
}
```

### Response

```json
{
  "_id": "12345",
  "title": "Learn Node.js",
  "completed": false<img width="545" height="392" alt="gettask" src="https://github.com/user-attachments/assets/eb4307bd-3729-40b4-b1c6-70cd030dbdfd" />
<img width="562" height="416" alt="filter" src="https://github.com/user-attachments/assets/0e526769-e55a-417c-86a7-81bd352675a3" />
<img width="564" height="427" alt="createtask" src="https://github.com/user-attachments/assets/5dd29d04-eb81-4e4a-a095-47b426db92ed" />

}
```

---

## Validation
* Task title cannot be empty
* Cannot mark a task as completed twice

## Error Handling
* Returns appropriate error messages for invalid requests
* Handles missing or invalid task IDs

##  Testing
Run tests using:

```bash
npm test
```

##  Key Decisions
* Used MongoDB for flexible schema design
* Followed MVC architecture for clean code structure
* Implemented RESTful API principles
* Added unit testing using Jest

##  Author
KRATISHA HIRAN

Kratisha Hiran
