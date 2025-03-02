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
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); //Test cases
console.log(book1.getDetails());
book1.updateCopies(-1);
console.log(book1.getDetails());

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
            console.log(`${book} not in list`);
        }
    }
}
const borrower1 = new Borrower("Alice Johnson", 201); //test cases
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);