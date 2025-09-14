# MVC Backend Project

This is a Node.js backend project following the MVC architecture. It uses Express, MongoDB (via Mongoose), JWT for authentication, and Zod for input validation.

## Features

- User signup and signin with JWT authentication
- Update user info (protected route)
- Get all users (with filter)
- Account balance check (protected route)
- Money transfer between accounts (protected route)
- Input validation using Zod
- Organized using MVC pattern

## Folder Structure

```
├── app.js
├── connection.js
├── controllers/
│   ├── account.js
│   └── user.js
├── middlewares/
│   └── index.js
├── models/
│   ├── account.js
│   └── user.js
├── routes/
│   ├── account.js
│   ├── index.js
│   └── user.js
├── package.json
├── package-lock.json
├── .env
└── readme.md
```

## Setup

1. **Clone the repository**
2. **Install dependencies**
   ```
   npm install
   ```
3. **Create a `.env` file** in the root directory:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
4. **Start the server**
   ```
   npm run start
   ```
   The server runs on port `5000`.

## API Endpoints

### User Routes

- `POST /api/v1/user/signup`  
  Signup a new user  
  **Body:**  
  ```
  {
    "userName": "user@example.com",
    "password": "yourpassword",
    "firstName": "First",
    "lastName": "Last"
  }
  ```

- `POST /api/v1/user/signin`  
  Signin user  
  **Body:**  
  ```
  {
    "username": "user@example.com",
    "password": "yourpassword"
  }
  ```

- `PUT /api/v1/user/`  
  Update user info (JWT required in `Authorization` header)  
  **Body:**  
  ```
  {
    "password": "newpassword",
    "firstName": "NewFirst",
    "lastName": "NewLast"
  }
  ```

- `GET /api/v1/user/bulk?filter=searchText`  
  Get all users, optionally filtered by first or last name

### Account Routes

- `GET /api/v1/account/balance`  
  Get account balance (JWT required)

- `POST /api/v1/account/transfer`  
  Transfer money to another account (JWT required)  
  **Body:**  
  ```
  {
    "amount": 100,
    "to": "receiverUserId"
  }
  ```

## Authentication

- Use JWT tokens returned from `/signup` or `/signin`
- Pass token in `Authorization` header as:  
  ```
  Authorization: Bearer <token>
  ```


---

**Author:** Pratham Raj