# Todo App V2

This toy project is to recall Rails concept and learn how to use Rails as backend and React as frontend.

You can access the app in production (here)[https://todo-app-v2-8wkw.onrender.com/login]. Note that this uses SQlite and free tier of render (data is not persistent).

## Libraries used (React)

- Material UI
- React Hook Form
- React Router
- React Query
- Zod

## Development Setup

```
$ git clone git@github.com:reynardmark/todo-app-v2.git
$ cd todo-app-v2
$ bundle
$ npm --prefix react i --legacy-peer-deps
$ rails db:setup
$ rails db:migrate
```

### Setting up environment variables

1. Create a .env.development file following the template of .env.sample inside react folder.
2. obtain

### Starting the app

```
$ foreman start
```
