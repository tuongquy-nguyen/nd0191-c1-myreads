# MyReads: A Book Tracking App

This project helps you find and track the reading progress of your books. You can categorize books into different shelves such as "Currently Reading," "Want to Read," and "Read." It provides an easy way to manage and organize your reading activities.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js (version 14.x or later)
npm (version 6.x or later)
```

### Installing

A step-by-step series of examples that tell you how to get a development environment running

1. Clone the repository

```
git clone https://github.com/tuongquy-nguyen/nd0191-c1-myreads.git
```

2. Navigate to the project directory

```
cd nd0191-c1-myreads
```

3. Install dependencies

```
npm install
```

4. Start the application

```
npm start
```

Now you can use the application.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Dependency Management

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
