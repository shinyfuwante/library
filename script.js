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
    for (const [key, value] of Object.entries(book)) {
        if (key == "read") continue;
        card.appendChild(createCardHelper(`book-${key}`, value));
    }
    let readStatus = document.createElement("div");
    if (book.read == true) {
        readStatus.classList.add("read");
        readStatus.innerText = "Has Read";
    } else {
        readStatus.innerText = "Not Read";
    }
    card.appendChild(readStatus);
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

let book1 = new Book(1, 2, 3, true);
let book2 = new Book(4, 5, 6, false);
let book3 = new Book(7, 8, 9, false);
let sampleBooks = [book1, book2, book3];
for (let i = 0; i < sampleBooks.length; i++) {
    addBook(sampleBooks[i]);
}
//--------------------------------------------------------------------------------------

displayLibrary();