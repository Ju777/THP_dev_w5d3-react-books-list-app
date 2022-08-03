var data = require("./src/data/books.json");
const booksListBackUp = (data.books[0]);
const booksList = [...booksListBackUp];

console.log(booksList);