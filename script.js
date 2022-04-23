let myLibrary = [];
numBooks = 0;

function Book(author, title, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

function addBook(book) {
    myLibrary.push(book);
}

function createBookCard(book) {
    let card = document.createElement("book");
    card.classList.add(`${numBooks++}`);
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

    const btnRemove = document.createElement("button");
    btnRemove.id = "remove";
    btnRemove.innerText = "Remove";
    card.appendChild(btnRemove);

    return card;
}

function createCardHelper(string, bookField) {
    let child = document.createElement("div");
    child.classList.add(string);
    child.innerText = bookField;
    return child;
}


function displayLibrary() {
    const library = document.querySelector("library");

    let child = library.lastChild;
    while (child) {
        library.removeChild(child);
        child = library.lastChild;
    }
    myLibrary.forEach(book => library.appendChild(createBookCard(book)));
}

function toggleRead(book) {
    book.read = !book.read;
}

// -------------------------------
function openForm(e){
    const form = document.querySelector("form.add-book");
    form.classList.toggle("visible");
}

function newBook(e) {
    e.preventDefault();
    let bookName = document.querySelector('#book_name');
    let bookAuthor = document.querySelector('#book_author');
    let bookPages = document.querySelector('#book_pages');
    let readStatus = document.querySelector('#have_read');

    let bookToAdd = new Book(bookAuthor.value, bookName.value, bookPages.value, readStatus.checked);
    addBook(bookToAdd);

    bookAuthor.value = "";
    bookName.value = "";
    bookPages.value = "";
    readStatus.checked = false;

    displayLibrary();

    const form = document.querySelector("form.add-book");
    form.classList.toggle("visible");
    
}

function removeBook(e) {
    const library = document.querySelector("library");
    
    nodeToRemove = e.target.parentNode;

    bookIndex = Number (nodeToRemove.classList[0]);
    myLibrary = myLibrary.filter((book, index) => index != bookIndex);

    nodeToRemove.remove();
}
// -------------------------------

function listener() {
    const btnOpenForm = document.querySelector('button#form-button');
    btnOpenForm.addEventListener('click', openForm);
    const btnAddBook = document.querySelector('button#add-book');
    btnAddBook.addEventListener('click', newBook);
    const btnsRemove = document.querySelectorAll('button#remove');
    btnsRemove.forEach(button => button.addEventListener('click', removeBook));
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
listener();