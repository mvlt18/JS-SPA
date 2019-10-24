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

  renderBookBlock() {
    const booksContainer = document.getElementById('books-content')

      const bookBlock = document.createElement('div')
      bookBlock.className = "book-container"
      booksContainer.appendChild(bookBlock)

        const deleteButton = document.createElement("BUTTON")
        deleteButton.setAttribute("id", `delete-button-${this.id}`)
        deleteButton.innerHTML = "DELETE BOOK"
        bookBlock.appendChild(deleteButton)

              deleteButton.addEventListener('click', () => {
                bookBlock.remove()
                this.deleteBook(`${this.id}`)
              })

        const image = document.createElement('img')
        image.setAttribute("class", "image")
        image.src = this.image
        bookBlock.appendChild(image)

        const bookInfo = document.createElement('div')
        bookInfo.className = "book-info"
        bookBlock.appendChild(bookInfo)

          const title = document.createElement('h3')
          title.setAttribute("class", 'book-title')
          title.innerHTML = this.title
          bookInfo.appendChild(title)

          const author = document.createElement('h3')
          author.setAttribute("class", 'book-author')
          author.innerHTML = `by: ${this.author}`
          bookInfo.appendChild(author)

        const reviewInfo = document.createElement('div')
        reviewInfo.className = "review-info"
        bookBlock.appendChild(reviewInfo)

          const reviewHeader = document.createElement('h4')
          reviewHeader.setAttribute("class", 'review-header')
          reviewHeader.innerHTML = 'Tribe Thoughts:'
          reviewInfo.appendChild(reviewHeader)

          const reviews = document.createElement('div')
          reviewInfo.appendChild(reviews)
          reviews.innerHTML = this.reviews.map(review => this.reviewBody(review)).join('')

          // console.log(this.reviews)
  }

  reviewBody(review){
    // console.log(review)
    return `<p>${review.reviewer} said: ${review.body}</p>`
  }

  deleteBook(id){
    // console.log(`the clicked book is ID: ${id}`)
    return fetch('http://localhost:3000/books' + '/' + id, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      }
    })
  }

}
