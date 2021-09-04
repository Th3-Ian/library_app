let my_library = [];


function Book(title, author, pages, read) {
  this.title = title
  this.author = author
	this.pages = pages
	this.read = read
  this.sayName = function() {
    console.log(title, author, pages, read)
  }
}

function addBookToLibrary() {
	var new_book = new Book(
		document.getElementById("title").nodeValue,
		document.getElementById("author").nodeValue,
		document.getElementById("pages").nodeValue,
		document.getElementById("read").nodeValue
		);

	if (my_library.includes(new_book)) {
		console.log("This book is already in the library");
	}
	else {
		my_library.push(new_book);
	}
}

const the_hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read')

the_hobbit.sayName()
addBookToLibrary(the_hobbit)

console.log(my_library)