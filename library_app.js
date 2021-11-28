let my_library = [];

var lib_cols = ['Title', 'Author', 'Pages', 'Read?', 'Delete']

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
	this.pages = pages
	this.read = read
}

Book.prototype.sayName = function() {
	document.getElementById("title_output").innerHTML = this.title;
	document.getElementById("author_output").innerHTML = this.author;
	document.getElementById("pages_output").innerHTML = this.pages;
	document.getElementById("read_output").innerHTML = this.read;
}

function addBookToLibrary() {
	var t = document.getElementById("title").value;
	var a = document.getElementById("author").value;
	var p = document.getElementById("page").value;
	var r = document.getElementById("read").value;

	var new_book = new Book( t, a, p, r);

	if (my_library.includes(new_book)) {
		console.log("This book is already in the library");
	}
	else {
		my_library.push(new_book);
		var t = document.querySelector('table');
		t.remove();
		showLibrary();
		console.log(my_library);
	}
}

// TESTING VARIABLES
/*
const the_hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read')
const two_towers = new Book('The Twin Towers', 'J.R.R. Tolkien', '348', 'read')

addBookToLibrary(the_hobbit)
addBookToLibrary(two_towers)
the_hobbit.sayName()
two_towers.sayName()
*/

/* FIRST Show Function
function showLibrary() {
	output = "";
   for(var i = 0; i < my_library.length; i++) {
      output += (i + 1) + ") " + my_library[i].sayName() + "  ";
   }
   document.getElementById("output").innerHTML = output;
}
*/
// Table Constructor
function showLibrary() {
	var t = document.createElement('table');
	t.classList.add('book-table', 'listing');

	t.appendChild(document.createElement('thead'));
	t.querySelector('thead').appendChild(document.createElement('tr'));

	for (var i = 0; i < lib_cols.length; i++) {
		var heading = document.createElement('td');
		heading.textContent = lib_cols[i];
		t.querySelector('thead tr').appendChild(heading);
	}

	document.getElementById('container').appendChild(t);


// Create Table Rows

	for (var i = 0; i < my_library.length; i++) {
		var s = my_library[i];
		var r = document.createElement('tr');

		r.dataset.personId = s.id;
		r.id = s.title + "-row";

		var titleCell = document.createElement('td');
		titleCell.textContent = s.title;
		titleCell.classList.add('title');
		titleCell.dataset.personId = s.id;

		var authorCell = document.createElement('td');
		authorCell.textContent = s.author;
		authorCell.classList.add('author');
		authorCell.dataset.personId = s.id;

		var pageCell = document.createElement('td');
		pageCell.textContent = s.pages;
		pageCell.classList.add('pages');
		pageCell.dataset.personId = s.id;

		var readCell = document.createElement('td');
		readCell.textContent = s.read;
		readCell.classList.add('read');
		readCell.dataset.personId = s.id;

		var delCell = document.createElement('td');
		delCell.textContent = "X";
		delCell.classList.add('del-cell');

		r.appendChild(titleCell);
		r.appendChild(authorCell);
		r.appendChild(pageCell);
		r.appendChild(readCell);
		r.appendChild(delCell);

		t.appendChild(r);
	}
}

showLibrary();
// Update Read Status

const readSelector = document.querySelectorAll(".read");

for (let i = 0; i < readSelector.length; i++) {
	readSelector[i].addEventListener("click", function(){
		var readStatus = prompt("Please update the read status:");
	readSelector[i].textContent = readStatus
	});
}

// Delete Button

const delBtn = document.querySelectorAll(".del-cell");

for (let i = 0; i < delBtn.length; i++) {
	delBtn[i].addEventListener("click", function(){
		var row = document.querySelector('table').getElementsByTagName('tr');
	row[i + 1].remove();

	});
}
// New Book Button

const toggleModal = () => {
	document.querySelector('.modal').classList.toggle('modal--hidden');
 };

 document.querySelector('#show-modal').addEventListener('click', toggleModal);

 document.querySelector('.modal_close-bar').addEventListener('click', toggleModal);

 document.querySelector('#open-form').addEventListener('submit', (event) => {
	 event.preventDefault();
	 addBookToLibrary();
	 toggleModal();
 });


 // Form Validation

 const book_title = document.getElementById("title");
 const titleError = document.querySelector('#title + span.error');
 const book_author = document.getElementById("author");
 const authorError = document.querySelector('#author + span.error');
 const page_count = document.getElementById("page");
 const countError = document.querySelector('#page + span.error');
 const book_read = document.getElementById("read");
 const readError = document.querySelector('#read + span.error');
const form = document.getElementById('open-form');


book_title.addEventListener('input', function (event) {
	if (book_title.validity.valid) {
		titleError.textContent = ''; // Reset the content of the message
    titleError.className = 'error';
	} else {
		showTitleError();
	}
});

book_author.addEventListener('input', function (event) {
	if (book_author.validity.valid) {
		authorError.textContent = ''; // Reset the content of the message
    authorError.className = 'error';
	} else {
		showAuthorError();
	}
});

page_count.addEventListener('input', function (event) {
	if (page_count.validity.valid) {
		countError.textContent = ''; // Reset the content of the message
    countError.className = 'error';
	} else {
		showCountError();
	}
});

book_read.addEventListener('input', function (event) {
	if (book_read.validity.valid) {
		readError.textContent = ''; // Reset the content of the message
    readError.className = 'error';
	} else {
		showReadError();
	}
});

form.addEventListener('submit', function (event) {
  if(!book_title.validity.valid) {
    showTitleError();
    event.preventDefault();
  } else if (!book_author.validity.valid ) {
		showAuthorError();
    event.preventDefault();
	} else if (!page_count.validity.valid) {
		showCountError();
    event.preventDefault();
	} else if (!book_read.validity.valid) {
		showReadError();
    event.preventDefault();
	}
});

function showTitleError() {
  if(book_title.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
  	titleError.textContent = 'You need to enter a book title.';
  } else if(book_title.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    titleError.textContent = 'The title needs to be 4 characters or longer';
  }
titleError.className = 'error active';
}

function showAuthorError() {
  if(book_author.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
  	authorError.textContent = 'You need to enter a value.';
  } else if(book_author.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    authorError.textContent = 'The author needs to be 4 characters or longer';
  }
authorError.className = 'error active';
}

function showCountError() {
  if(page_count.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
  	countError.textContent = 'You need to enter a value.';
  } else if(page_count.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    countError.textContent = 'Entered value needs to be a number.';
  } else if(page_count.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    countError.textContent = `The book should be at least 50 pages.`;
  }
countError.className = 'error active';
}

function showReadError() {
  if(book_read.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
  	readError.textContent = "You need to enter a value 'Read' or 'Not Read'.";
  } else if(book_read.validity.patternMismatch) {
    readError.textContent = "Please enter 'Read' or 'Not Read'";
  }
readError.className = 'error active';
}