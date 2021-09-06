let my_library = [];

var lib_cols = ['Title', 'Author', 'Pages', 'Read?', 'Delete']

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
	this.pages = pages
	this.read = read
}

Book.prototype.sayName = function() {
	document.getElementById("title_output").innerHTML = this.title, this.author, this.pages, this.read;
	document.getElementById("author_output").innerHTML = this.author, this.pages, this.read;
	document.getElementById("pages_output").innerHTML = this.pages, this.read;
	document.getElementById("read_output").innerHTML = this.read;
}

function addBookToLibrary(new_book) {
	/*
	var new_book = new Book(
		document.getElementById("title"),
		document.getElementById("author"),
		document.getElementById("pages"),
		document.getElementById("read")
		);
		*/

	if (my_library.includes(new_book)) {
		console.log("This book is already in the library");
	}
	else {
		my_library.push(new_book);
		console.log(my_library)
	}
}

const the_hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read')
const two_towers = new Book('The Twin Towers', 'J.R.R. Tolkien', '348', 'read')

addBookToLibrary(the_hobbit)
addBookToLibrary(two_towers)
the_hobbit.sayName()
two_towers.sayName()

function showLibrary() {
	output = "";
   for(var i = 0; i < my_library.length; i++) {
      output += (i + 1) + ") " + my_library[i].sayName() + "  ";
   }
   document.getElementById("output").innerHTML = output;
}

// Table Constructor

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
	r.id = s.title.toLowerCase() + "-row";

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
	delCell.classList.add('delete-cell');

	r.appendChild(titleCell);
	r.appendChild(authorCell);
	r.appendChild(pageCell);
	r.appendChild(readCell);
	r.appendChild(delCell);

	t.appendChild(r);
}

// Update Read Status

const readSelector = document.querySelectorAll(".read");

for (let i = 0; i < readSelector.length; i++) {
	readSelector[i].addEventListener("click", function(){
		var readStatus = prompt("Please update the read status:");
	readSelector[i].textContent = readStatus
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
	 toggleModal();
 });
