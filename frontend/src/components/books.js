class Books {
  constructor() {
    this.books = []
    this.adapter = new BooksAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadBooks()
  }

  initBindingsAndEventListeners() {
    this.newBookForm = document.getElementById('new-book-form')
    this.newBookTitle = document.getElementById('new-book-title')
    this.newBookAuthor = document.getElementById('new-book-author')
    this.newBookImage = document.getElementById('new-book-image')
    this.newBookForm.addEventListener('submit', this.createBook.bind(this))
    //anytime the book is submitted, bind the Books class/object as this - otherwise the this will be the form itself
  }

  createBook(e) {
    // console.log(this) // this is the books class now.
    e.preventDefault(); //pass in event object & prevents the default of page refresh on form submit
    const titleValue = this.newBookTitle.value;
    const authorValue = this.newBookAuthor.value
    const imageValue = this.newBookImage.value

    this.adapter.createBook(titleValue,authorValue,imageValue)
      .then(book => {
      // console.log(book) // new book object
      const newBook = new Book(book)
      // this.books.push(new Book(book))
      this.books.push(newBook)
      this.newBookTitle.value = ' '
      this.newBookAuthor.value = ' '
      this.newBookImage.value = ' '
      newBook.renderBookBlock()
      // return console.log(this.books)
      })
  }

  fetchAndLoadBooks() {
    this.adapter
      .getBooks()
      .then(books => {
      // console.log(books) // array of book objects
      books.forEach(book => this.books.push(new Book(book)))
      })
      .then(() => {
      this.renderBooks()
    })
  }

  renderBooks() {
  // return console.log(this.books)
  this.books.map(book => book.renderBookBlock())
  }

}
