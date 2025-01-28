const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // this.info = function(){
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}`
    // }
}

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
}

const bookTable = document.querySelector("table");
const totalBooksElement = bookTable.querySelector("#totalBooks + td")
const totalPagesElement = bookTable.querySelector("#totalPages + td")

function displayLibrary(){
    myLibrary.forEach(book => {
        const row = document.createElement("tr")
        for (const propertyName of Object.getOwnPropertyNames(book)) {
            const col = document.createElement("td");
            col.textContent = propertyName == "read" ? (book[propertyName] ? "Yes" : "No"): book[propertyName];
            row.appendChild(col);
        }
        bookTable.querySelector("tbody").appendChild(row);
        totalBooksElement.textContent = parseInt(totalBooksElement.textContent)+1;
        totalPagesElement.textContent = parseInt(totalPagesElement.textContent)+book.pages;
    });
}

addBookToLibrary("Eragon", "Christopher Paolini", 532, true)
addBookToLibrary("Eldest", "Christopher Paolini", 800, true)
addBookToLibrary("Murtagh", "Christopher Paolini", 602, false)
displayLibrary()