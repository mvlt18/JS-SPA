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
        deleteButton.innerHTML = "Delete Book"
        bookBlock.appendChild(deleteButton)

              deleteButton.addEventListener('click', () => {
                bookBlock.remove()
                this.deleteBook(`${this.id}`)
              })

        const reviewButton = document.createElement("BUTTON")
        reviewButton.setAttribute("id", `review-button-${this.id}`)
        reviewButton.setAttribute("onclick", "openForm()")
        reviewButton.innerHTML = "Add A Thought"
        bookBlock.appendChild(reviewButton)

              // reviewButton.addEventListener('click', () => {
              //   // console.log(this)
              //   this.enterReviewInputs(this)
              // })

              reviewButton.addEventListener('click', this.enterReviewInputs.bind(this))


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
          reviews.setAttribute("id", `review-${this.id}`)
          reviewInfo.appendChild(reviews)
          reviews.innerHTML = this.reviews.map(review => this.reviewBody(review)).join('')

          // console.log(this.reviews)
  }

  reviewBody(review){
    // console.log(review)
    // return `<p>${review.reviewer} said: ${review.body}</p>`
    return `<p>${review.body}</p>`
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
  enterReviewInputs(event){
    // console.log(this)
    event.preventDefault();
    const newReviewForm = document.getElementById('new-review-form')
    newReviewForm.name = this.id
    newReviewForm.addEventListener('submit', this.submitReviewInputs.bind(this))
  }

  submitReviewInputs(e){
    // console.log(e)
    console.log(event.target.name) //new review form name ==== this.id
    e.preventDefault();
    // console.log(this) //the book
    const newReviewBody = document.getElementById('new-review-body')
    const newReviewReviewer = document.getElementById('new-review-reviewer')
    // console.log(newReviewBody.value)
    // console.log(newReviewReviewer)
    // const reviewBox = document.getElementById(`review-${this.id}`)
    const reviewBox = document.getElementById(`review-${event.target.name}`)
    const pDiv = document.createElement('p')
    reviewBox.appendChild(pDiv)

    const reviewAddition = {
        // book_id: this.id ,
        book_id: event.target.name,
        body: newReviewBody.value,
        reviewer: newReviewReviewer.value
    };

    fetch('http://localhost:3000/reviews', {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(reviewAddition)
    })
    .then(res => res.json())
      .then(review => {
      // console.log(review)
      // console.log(review.body)
      // console.log(review.reviewer)

      // pDiv.innerHTML = `${review.reviewer} said: ${review.body}`;
      pDiv.innerHTML = review.body
      console.log(this)

      newReviewBody.value = ' '
      newReviewReviewer.value = ' '
      })
  }

}
