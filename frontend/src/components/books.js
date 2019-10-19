class Books {
  constructor() {
    this.books = []
    this.adapter = new BooksAdapter()
    this.fetchAndLoadBooks()
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
      this.render()
    })
  }

  render() {
    // console.log(this.books)
    const booksContainer = document.getElementById('book-content')
    booksContainer.innerHTML = this.books.map(book => book.createBookBlock())
  }
}
