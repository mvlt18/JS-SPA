class Books {
  constructor() {
    this.books = []
    this.adapter = new BooksAdapter()
    // this.initBindingsAndEventListeners()
    this.fetchAndLoadBooks()
  }

  // initBindingsAndEventListeners() {
  //   this.booksContainer = document.getElementById('books-content')
  // }

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
  this.books.map(book => book.renderBookBlock())
  }


}
