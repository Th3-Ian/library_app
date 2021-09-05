let my_library = [];


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

function showLibrary() {
	output = "";
   for(var i = 0; i < my_library.length; i++) {
      output += (i + 1) + ") " + my_library[i].sayName() + "  ";
   }
   document.getElementById("output").innerHTML = output;
}

the_hobbit.sayName()
two_towers.sayName()


const toggleModal = () => {
	document.querySelector('.modal').classList.toggle('modal--hidden');
 };

 document.querySelector('#show-modal').addEventListener('click', toggleModal);

 document.querySelector('.modal_close-bar').addEventListener('click', toggleModal);

 document.querySelector('#open-form').addEventListener('submit', (event) => {
	 event.preventDefault();
	 toggleModal();
 });
