// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('div');
 
    row.innerHTML = `
	<ul class="list-group list-group-flush" style="background-color:white;
	 box-shadow: 5px 10px 25px 5px rgba(6, 12, 34, 0.1); margin-bottom:40px;  border: none;
	border-radius: 5px;
	transition: all  0.3s ease-in-out;">
	<li class="list-group-item"><h6>Exam Name</h6> ${book.title}</li>
	<li class="list-group-item"><h6>Result</h6> ${book.author}</li>
	<li class="list-group-item"><h6>Doctor Name</h6><strong> ${book.isbn}</strong></li>
	<li class="list-group-item"><strong>27/Avril/2019</strong></li>
	<li class="list-group-item">
 <div style="display:inline-flex">
	<div class="user-media-slider-item " style="margin-right:7px" id="modalIdo">
	<img src="assets/images/pdf.svg" class="" alt="user-media">
    </div>
    <div class="user-media-slider-item">
	<img src="assets/images/xls.svg" class="" alt="user-media" style="margin-right:7px" id="modalIdo">
    </div>
   <div class="user-media-slider-item">
	<img src="assets/images/doc.svg" class="" alt="user-media" id="modalIdo">
   </div>
</div>

	</li>
	<li class="list-group-item"><strong style="margin-right:25px;">Can you want delete this Exam?</strong><a href="#" class="btn btn-danger btn-sm delete">X</a></li>
  </ul>
  
      
	  </ul> `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Store Class: Handles Storage
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('') === null) //books
	{
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if(book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Validate
  if(title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    // Instatiate book
    const book = new Book(title, author, isbn);

    // Add Book to UI
    UI.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Show success message
    UI.showAlert('Book Added', 'success');

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  UI.showAlert('Book Removed', 'success');
});
