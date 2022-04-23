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
    card.dataset.index = numBooks++;
    for (const [key, value] of Object.entries(book)) {
        if (key == "read") continue;
        card.appendChild(createCardHelper(`${key}`, value));
    }
    let readStatus = document.createElement("button");
    readStatus.id = "read-status";

    if (book.read == true) {
        readStatus.classList.add("read");
        readStatus.innerText = "Have Read";
    } else {
        readStatus.innerText = "Not read yet";
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
    string = string.charAt(0).toUpperCase() + string.slice(1);
    child.classList.add(string);

    if (string === "NumPages") string = "# of pages";

    child.innerText = `${string}: ${bookField}`;
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

function toggleRead(e) {
    let element = e.target;
    element.classList.toggle("read");

    if (element.classList.contains("read")) element.innerText = "Have Read";
    else element.innerText = "Not read yet";


    const book = e.target.parentNode;
    myLibrary[book.dataset.index].read = !myLibrary[book.dataset.index].read;
}

// -------------------------------
function toggleForm(e){
    const form = document.querySelector("form.add-book");
    resetForm();
    form.classList.toggle("visible");
}

function resetForm() {
    let bookName = document.querySelector('#book_name');
    let bookAuthor = document.querySelector('#book_author');
    let bookPages = document.querySelector('#book_pages');
    let readStatus = document.querySelector('#have_read');

    bookAuthor.value = "";
    bookName.value = "";
    bookPages.value = "";
    readStatus.checked = false;
}

function newBook(e) {
    e.preventDefault();
    let bookName = document.querySelector('#book_name');
    let bookAuthor = document.querySelector('#book_author');
    let bookPages = document.querySelector('#book_pages');
    let readStatus = document.querySelector('#have_read');

    let bookToAdd = new Book(bookAuthor.value, bookName.value, bookPages.value, readStatus.checked);
    addBook(bookToAdd);

    displayLibrary();

    const form = document.querySelector("form.add-book");
    form.classList.toggle("visible");
    
}

function removeBook(e) {
    const library = document.querySelector("library");
    
    nodeToRemove = e.target.parentNode;

    bookIndex = nodeToRemove.dataset.index;
    myLibrary = myLibrary.filter((book, index) => index != bookIndex);

    nodeToRemove.remove();
}
// -------------------------------

function listener() {
    //form access
    const btnOpenForm = document.querySelector('button#form-button');
    const btnCloseForm = document.querySelector('button#close-button');
    btnOpenForm.addEventListener('click', toggleForm);
    btnCloseForm.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForm(e);
    });

    //adding/removing books
    const btnAddBook = document.querySelector('button#add-book');
    btnAddBook.addEventListener('click', newBook);
    const btnsRemove = document.querySelectorAll('button#remove');
    btnsRemove.forEach(button => button.addEventListener('click', removeBook));

    //toggle read status
    const btnsRead = document.querySelectorAll('button#read-status');
    btnsRead.forEach(button => button.addEventListener('click', toggleRead));
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