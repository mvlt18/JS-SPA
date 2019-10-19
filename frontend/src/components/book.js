class Book {
  constructor(bookJSON) {
    // console.log(Book) // logs Book class correctly.
    // console.log(bookJSON) // logs
    this.id = bookJSON.id
    this.title = bookJSON.title
    this.author = bookJSON.author
    this.image = bookJSON.image
    this.reviews = bookJSON.reviews
  }

  createBookBlock() {
    const booksContainer = document.getElementById('books-content')

      const bookBlock = document.createElement('div')
      bookBlock.className = "book-quarter-container"

      const image = document.createElement('img')
      image.src = this.image
      bookBlock.appendChild(image)

      const title = document.createElement('h3')
      title.innerHTML = this.title
      bookBlock.appendChild(title)

      const reviews = document.createElement('ul')
      bookBlock.appendChild(reviews)
      reviews.innerHTML = this.reviews.map(review => `<li><p>${review.body}</p></li>`).join('')
      // const review = document.createElement('li')
      // review.innerHTML = this.reviews.map(review => `<p>${review.body}</p>`).join('')
      // reviews.appendChild(review)
      // console.log(this.reviews)

      booksContainer.appendChild(bookBlock)
    }
  }
