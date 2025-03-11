# Task Manager

## Overview
Task Manager is a simple task management application built with React and a backend API. It allows users to create, view, update, and delete tasks efficiently. The project follows a clean UI design.

##### Backend Repository: https://github.com/gitxAnkit/task-management-api
##### Backend deployed link: https://task-management-api-h92p.onrender.com/api/v1

##### Frontend live link: https://task-management-ui-nine.vercel.app/

## Features
- Add new tasks with a title, description, status, and deadline
- Delete tasks from the list
- Responsive and user-friendly UI

## Tech Stack
### Frontend
- React.js
- TypeScript
- Tailwind CSS
- Axios (for API communication)

### Backend
- Node.js
- Express.js
- MongoDB (for task storage)


## API Endpoints
### GET /tasks
- Fetches all tasks from the database

### POST /tasks
- Adds a new task to the database
- Request body:
  ```json
  {
    "title": "New Task",
    "description": "Task details here",
    "status": "pending",
    "date": "YYYY-MM-DD"
  }
  ```

### DELETE /task/:id
- Deletes a task by its ID

## Setup and Installation
1. Clone the repository:
   ```sh
   git clone git@github.com:gitxAnkit/task-management-ui.git
   cd task-management-ui
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```