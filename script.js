const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}`
    }
}

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
}

const bookTable = document.querySelector("table");
const totalBooksElement = bookTable.querySelector("#totalBooks").nextSibling;
const totalPagesElement = bookTable.querySelector("#totalPages").nextSibling;