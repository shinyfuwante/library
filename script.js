let myLibrary = [];

function Book(author, title, numPages, read) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
}

function addBook(book) {
    myLibrary.push(book);
}


function displayLibrary() {
    myLibrary.forEach(book => console.log(book));
}

function toggleRead(book) {
    book.read = !book.read;
}


// -------------------------------------------------------------------------------------
function addBooks(books) {
    books.forEach(book => addBook(book));
}
let book1 = new Book(1, 2, 3, true);
let book2 = new Book(4, 5, 6, false);
let book3 = new Book(7, 8, 9, false);
let sampleBooks = [book1, book2, book3];
addBooks(sampleBooks);
//--------------------------------------------------------------------------------------