//Task 1 - Created Book Class
class Book { //create a class book with properties
    constructor(title, author, isbn, copies) {
        this.title = title; //string
        this.author = author; //string
        this.isbn = isbn; //number
        this.copies = copies; //number
    }
    getDetails() { //add a method that returns ...
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    updateCopies(quantity) { //add a method that modifies ...
        this.copies += quantity;
    }
}


//Task 2 - Created Borrower Class
class Borrower { //create a class with properties
    constructor(name, borrowerId) {
        this.name = name; //string
        this.borrowerId = borrowerId; //number
        this.borrowedBooks = []; //array of borrowed book titled
    }
    borrowBook(book) { //add a method
        this.borrowedBooks.push(book);
    }
    returnBook(book) { //add a method
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        } else {
            console.log(`${book.title} not in list`);
        }
    }
}


//Task 3 - Library Class
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        this.books.forEach(book => {
            console.log(book.getDetails());
        });
    }
}

//Task 4 - Implementing Book Borrowing
class LibraryWithLending extends Library {
    constructor() {
        super ();
    }
    lendBook(borrowerId, isbn) { //add a method
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        if (book && book.copies >0) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
            console.log(`${borrower.name} borrow "${book.title}"`);
        } else if (!book) {
            console.log("Not found");
        } else {
            console.log("Unavailable");
        }
    }
}


//Task 5 - Implementing Book Returns
class LibraryWithReturns extends LibraryWithLending {
    constructor() {
        super();
    }
    returnBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        if (book && borrower) {
            book.updateCopies(1);
            borrower.returnBook(book.title);
            console.log(`${borrower.name} return "${book.title}"`);
        } else if (!book) {
            console.log("N/A");
        } else if (!borrower) {
            console.log("N/a");
        }
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); //tast 1 cases
console.log(book1.getDetails());
book1.updateCopies(-1);
console.log(book1.getDetails());

const borrower1 = new Borrower("Alice Johnson", 201);//task 2 cases
borrower1.borrowBook(book1)
console.log(borrower1.borrowedBooks);
borrower1.returnBook(book1);
console.log(borrower1.borrowedBooks);

const library = new Library(); //task 3 cases
library.addBook(book1);
library.listBooks();

const libraryWithLending = new LibraryWithLending(); //task 4 cases
libraryWithLending.addBook(book1);
libraryWithLending.borrowers.push(borrower1);
libraryWithLending.lendBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);

const libraryWithReturns = new LibraryWithReturns();
libraryWithReturns.addBook(book1);
libraryWithReturns.borrowers.push(borrower1);
libraryWithReturns.returnBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);