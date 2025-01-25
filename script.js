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

const b1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(b1.info());