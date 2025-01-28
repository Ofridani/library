const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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

const openButton = document.querySelector("button.openModal");
const closeButton = document.querySelector("button.closeModal");
const modal = document.querySelector("#addBook");
const form = document.querySelector("#bookForm");

openButton.addEventListener("click", () => {
    modal.showModal();
})

form.addEventListener("submit", (event) => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = parseInt(document.querySelector("#pages").value);
    const read = document.querySelector('input[name="read"]:checked').value === "yes";
    addBookToLibrary(title, author, pages, read);
    displayLibrary();
    modal.close();
})

addBookToLibrary("Eragon", "Christopher Paolini", 532, true);
addBookToLibrary("Eldest", "Christopher Paolini", 800, true);
addBookToLibrary("Murtagh", "Christopher Paolini", 602, false);
displayLibrary();