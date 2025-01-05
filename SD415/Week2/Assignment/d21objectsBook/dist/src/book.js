/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library,
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
export let library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
export function showTitles() {
  /* this function is complete, no need to modify.  Inspect it as an example for the other functions. */
  /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */
  const titles = findTitles();
  /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
  const titleString = titles.join("\n");
  let textArea = document.getElementById("displayArea");
  if (textArea) {
    textArea.innerHTML = titleString;
  }
}
/**
 *
 * @return {object} array holding all titles as elements
 */
export function findTitles() {
  let titles = [];
  for (const book of library) {
    titles.push(book.title);
  }
  return titles.sort();
}
/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
export function addBook() {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const title = titleInput.value;
  const author = authorInput.value;
  const id = Math.floor(Math.random() * 9000) + 1000;
  createBook(title, author, id);
}
/**
 *
 * @returns {string[]} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */
export function findAuthors() {
  let author = [];
  for (const book of library) {
    author.push(book.author);
  }
  return author.sort();
}
/**
 *
 * @returns {number[]} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
 */
export function findIDs() {
  let id = [];
  for (const book of library) {
    id.push(book.libraryID);
  }
  return id.sort();
}
/**
 * @returns {book} new book object
 * createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library,
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
 */
export function createBook(title, author, libraryID) {
  const newBook = {
    title: title,
    author: author,
    libraryID: libraryID,
  };
  console.log("book Creating and ", newBook);
  library.push(newBook);
  return newBook;
}
/**
 *
 * @returns {undefined}
 */
export function scramble() {
  console.log("implement scramble if you have time ...");
}
