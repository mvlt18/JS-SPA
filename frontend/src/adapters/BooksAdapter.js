class BooksAdapter{
  constructor() {
    this.baseUrl = 'http://localhost:3000/books'
  }

  getBooks() {
    return fetch(this.baseUrl).then(res => res.json())
  }
}
