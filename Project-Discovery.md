# Todo List Project Discovery Documentation

## Table of Contents

## Technologies

- MongoDB (Mongoose)
- Express
- React
- Node.js
- Bootstrap
- React-Bootstrap
- Axios
- React-Router-Dom
- React-Icons
- Passport
- Bcryptjs
- Jsonwebtoken
- Passport-Jwt
- Passport-Local

## Features

- User Authentication
- User Authorization
- Todo List (per user)
- Todo List CRUD Operations

## Database Schema

- User

  - username: String
  - password: String
  - todos: [Todo]

- Todo
  - title: String
  - description: String
  - completed: Boolean

## Routes

- /api/users

  - GET /:id
  - POST /login
  - PUT /:id
  - DELETE /:id
  - GET /logout

- /api/todos
  - GET /:id
  - POST /
  - PUT /:id
  - DELETE /:id

## Server-Side File Structure

server/
│
├── controllers/
│   ├── userController.js
│   └── todoController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── passport.js
│
├── models/
│   ├── userModel.js
│   └── todoModel.js
│
├── routes/
│   ├── userRoutes.js
│   └── todoRoutes.js
│
├── .env
├── package.json
|── .gitignore
├── server.js

## Client-Side Routes

- / (Home)
- /login (Login)
- /register (Register)

### Authenticated Routes

- /todos (Todo List)
- /todos/new (Create Todo)
- /todos/:id (Edit Todo)

## Components

- App
- Navbar
- Home
- Login
- Register
- TodoList
- Todo
- CreateTodo
- EditTodo
- Button
