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
    
    card.appendChild(createCardHelper("bookAuthor", book.author));
    card.appendChild(createCardHelper("bookTitle", book.title));
    card.appendChild(createCardHelper("bookNumPages", book.numPages));
    card.appendChild(createCardHelper("readStatus", book.read));

    return card;
}

function createCardHelper(string, bookField) {
    let child = document.createElement("div");
    child.classList.add(string);
    child.innerText = bookField;
    return child;
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