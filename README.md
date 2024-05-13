# Todo App V2

This toy project is to recall Rails concept and learn how to use Rails as backend and React as frontend.

## Libraries used (React)

- Material UI
- React Hook Form
- React Router
- React Query
- Zod

## Setup

```
$ git clone git@github.com:reynardmark/todo-app-v2.git
$ cd todo-app-v2
$ bundle
$ npm i --legacy-peer-deps
$ rails db:setup
$ rails db:migrate
```

### Starting the app

```
$ foreman start
```

### To see prod locally

```
$ npm run build
$ RAILS_SERVE_STATIC_FILES=1 RAILS_ENV=production rails s -b 127.0.0.1 -p 3000
```

then access locally via: https://127.0.0.1:3000/
