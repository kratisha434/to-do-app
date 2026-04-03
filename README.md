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
  "completed": false

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

<img width="545" height="392" alt="gettask" src="https://github.com/user-attachments/assets/4d2f054c-f267-41dc-b101-48037af2a3ca" />
<img width="562" height="416" alt="filter" src="https://github.com/user-attachments/assets/8aa5c8df-e36e-4586-a75f-4ad1e84c6a4a" />
<img width="564" height="427" alt="createtask" src="https://github.com/user-attachments/assets/ad7edb02-9c6a-4475-9971-88cafd49e34d" />

##  Key Decisions
* Used MongoDB for flexible schema design
* Followed MVC architecture for clean code structure
* Implemented RESTful API principles
* Added unit testing using Jest

##  Author
KRATISHA HIRAN

Kratisha Hiran
