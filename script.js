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

function removeBookFromLibrary(key){
    myLibrary.splice(key, 1);
}

const bookTable = document.querySelector("table");
const bookTableBody = bookTable.querySelector("tbody");
const totalBooksElement = bookTable.querySelector("#totalBooks + td");
const totalPagesElement = bookTable.querySelector("#totalPages + td");

function displayLibrary(){
    clearLibraryDisplay();
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const row = document.createElement(`tr`); // table row containing the book's information
        row.dataset.key = i;
        for (const propertyName of Object.getOwnPropertyNames(book)) {
            const col = document.createElement("td");
            col.textContent = propertyName == "read" ? (book[propertyName] ? "Yes" : "No") : book[propertyName]; // if the property is "read" then write as "yes" and "no" instead of a boolean, else write the normal property
            row.appendChild(col);
        }

        // Creating remove button for book in table
        const colrem = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "removeBook";
        removeButton.addEventListener("click", (event) => {
            removeBookFromLibrary(removeButton.parentElement.parentElement.dataset.key);
            displayLibrary();
        });
        colrem.appendChild(removeButton);
        row.appendChild(colrem);

        const colread = document.createElement("td");
        const readButton = document.createElement("button");
        readButton.textContent = `Change to ${book.read ? '"Not Read"' : '"Read"'}`;
        readButton.className = "removeBook";
        readButton.addEventListener("click", (event) => {
            const b = myLibrary[parseInt(readButton.parentElement.parentElement.dataset.key)];
            b.read = !b.read;
            displayLibrary();
        });
        colread.appendChild(readButton);
        row.appendChild(colread);

        bookTableBody.appendChild(row);
        totalBooksElement.textContent = parseInt(totalBooksElement.textContent)+1;
        totalPagesElement.textContent = parseInt(totalPagesElement.textContent)+book.pages;
    }
}

function clearLibraryDisplay(){
    bookTableBody.replaceChildren();
    totalBooksElement.textContent = "0";
    totalPagesElement.textContent = "0";
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