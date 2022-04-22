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

function createBookCard(book) {
    let card = document.createElement("book");
    card.classList.add(`book${myLibrary.length}`);
    //every card will have 4 children, 1 for each element
    //the card will display everything in a grid, 1 for each row;
    let bookAuthor = document.createElement("div");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.innerText = book.author;
    card.appendChild(bookAuthor);

    let bookTitle = document.createElement("div");
    bookTitle.classList.add("bookTitle");
    bookTitle.innerText = book.title;
    card.appendChild(bookTitle);

    let bookNumPages = document.createElement("div");
    bookNumPages.classList.add("bookNumPages");
    bookNumPages.innerText = book.numPages;
    card.appendChild(bookNumPages);

    let readStatus = document.createElement("div");
    readStatus.classList.add("readStatus");
    readStatus.innerText = book.read;
    card.appendChild(readStatus);
    return card;
}


function displayLibrary() {
    //myLibrary.forEach(book => console.log(book));
    //select the library element (which will be a grid)
    //loop through library array and for each book ->
    //append createBookCard(book)
    //display the card by appending it to library!
    const library = document.querySelector("library");
    myLibrary.forEach(book => library.appendChild(createBookCard(book)));
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
addBook(sampleBooks[0]);
//--------------------------------------------------------------------------------------

displayLibrary();