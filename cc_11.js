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

