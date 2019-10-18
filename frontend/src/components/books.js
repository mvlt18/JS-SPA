class Books {
  constructor() {
    this.books = []
    this.adapter = new BooksAdapter()
    //this.bindEventListeners()
    this.fetchAndLoadBooks()
  }

  fetchAndLoadBooks() {
    this.adapter
      .getBooks()
      .then(books => {
      // return console.log(books)
      books.forEach(book => this.books.push(book))
      })
      .then(() => {
      this.render()
    })
  }

  render() {
    const booksContainer = document.getElementById('testingbooks')
    booksContainer.innerHTML = 'My books Here!'
    console.log ('look at my books... ', this.books)
  }

  // render() {
  //   const reviewsContainer = document.getElementById('review-container')
  //   reviewsContainer.innerHTML = 'My reviews Here!'
  // }



}
