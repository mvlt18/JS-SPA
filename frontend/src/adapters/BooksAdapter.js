class BooksAdapter{
  constructor() {
    this.baseUrl = 'http://localhost:3000/books'
  }

  getBooks() {
    return fetch(this.baseUrl).then(res => res.json())
  }

  createBook(titleValue, authorValue, imageValue) {
    const book = {
      title: titleValue,
      author: authorValue,
      image: imageValue

    };
    return fetch(this.baseUrl, {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(book)
    })
    .then(res => res.json())
  }
}
