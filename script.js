const myLibrary = [];

function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;

    this.info = function(){
        return `${this.title}, ${this.pages}, ${this.read ? "already read" : "not read yet"}`
    }
}
