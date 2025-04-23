# Fullstack Todo App

A fullstack Todo application built with:

- **Backend**: .NET Core API
- **Frontend**: React.js
- **Database**: PostgreSQL
- **Containerization**: Docker

This project is a learning project on how to handle Docker.

---

## Features

- Add, edit, and delete todos.
- Mark todos as completed.
- Store data in a PostgreSQL database.

---

## Technologies

- **Backend**
  - .NET 6 (or 7 depending on your version) API
  - Entity Framework Core for ORM
  - PostgreSQL for the database

- **Frontend**
  - React.js (Vite + Typescript)
  - Axios for HTTP requests
  - Tailwind CSS for styling

- **Database**
  - PostgreSQL (managed in Docker container)

- **Containerization**
  - Docker Compose

---

## Setup Instructions

### Prerequisites

1. Docker and Docker Compose installed
   - [Install Docker](https://docs.docker.com/get-docker/)
   - [Install Docker Compose](https://docs.docker.com/compose/install/)

2. Node.js and npm (for frontend development)
   - [Install Node.js](https://nodejs.org/)

3. .NET SDK (for backend development)
   - [Install .NET](https://dotnet.microsoft.com/download)

---

### Env

```env
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

### Running

```bash
docker-compose up --build
```
