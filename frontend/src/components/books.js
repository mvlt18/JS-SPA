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
    //anytime the note is submitted, bind the Notes class/object as this - otherwise the this will be the form itself
  }

  createBook(e) {
    // console.log(this)
    // console.log('book is being created!')
    e.preventDefault(); //pass in event object & prevents the default of page refresh on form submit
    const titleValue = this.newBookTitle.value;
    const authorValue = this.newBookAuthor.value
    const imageValue = this.newBookImage.value

    this.adapter.createBook(titleValue,authorValue,imageValue)
      .then(book => {
      // console.log(book)
      const newBook = new Book(book)
      // this.books.push(new Book(book))
      this.books.push(newBook)
      this.newBookTitle.value = ' '
      this.newBookAuthor.value = ' '
      this.newBookImage.value = ' '
      // this.renderBooks()
      newBook.renderBookBlock()

      // return console.log(this.books)
      })
  }

  fetchAndLoadBooks() {
    this.adapter
      .getBooks()
      .then(books => {
      // return console.log(books)
      books.forEach(book => this.books.push(new Book(book)))
      // console.log(this.books)
      })
      .then(() => {
      this.renderBooks()
    })
  }

  renderBooks() {
  // console.log(this.books)
  const booksContainer = document.getElementById('books-content')
  booksContainer.innerHTML = ' '
  this.books.map(book => book.renderBookBlock())
  }


}
