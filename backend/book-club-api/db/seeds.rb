# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.destroy_all
Review.destroy_all


puts "Seeding..."

b1 = Book.create(title: "Brotopia: Breaking Up the Boys' Club of Silicon Valley", author: "Emily Chang", image: "https://images-na.ssl-images-amazon.com/images/I/8123KNmCz1L.jpg")
b2 = Book.create(title: "The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution", author: "Walter Isaacson", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1410191571l/21856367.jpg")
b3 = Book.create(title: "Einstein: His Life and Universe", author: "Walter Isaacson", image: "https://images-na.ssl-images-amazon.com/images/I/51aQOSZp3xL._SX334_BO1,204,203,200_.jpg")
b4 = Book.create(title: "Computer Science: An Interdisciplinary Approach", author: "Kevin Wayne and Robert Sedgewick", image: "https://images-na.ssl-images-amazon.com/images/I/51FSQK5-FJL._SX395_BO1,204,203,200_.jpg")
b5 = Book.create(title: "Sapiens", author: "Yuval Noah Harari", image: "https://images-na.ssl-images-amazon.com/images/I/51Sn8PEXwcL.jpg")
b6 = Book.create(title: "Outliers", author: "Malcolm Gladwell", image: "https://librastyles.com/wp-content/uploads/2019/06/outliers-the-story-of-success-ebook-pdf.jpg")
b7 = Book.create(title: "Why we Sleep", author: "Matthew Walker", image: "https://images-na.ssl-images-amazon.com/images/I/81w6RZ6xm1L.jpg")
b8 = Book.create(title: "Letters from an Astrophysicist", author: "Neil deGrasse Tyson", image: "https://images-na.ssl-images-amazon.com/images/I/41rqAPAHXzL._SX306_BO1,204,203,200_.jpg")
b9 = Book.create(title: "Breakfast: The Cookbook", author: "Emily Elyse Miller ", image: "https://images-na.ssl-images-amazon.com/images/I/41Ee80zeHZL._SX334_BO1,204,203,200_.jpg")
b10 = Book.create(title: "The Pragmatic Programmer: your journey to mastery, 20th Anniversary Edition", author: "David Thomas & Andrew Hunt", image: "https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX380_BO1,204,203,200_.jpg")


r1= Review.create(body: "Awesome book, a must read!!", reviewer: "Ella", book_id: 1 )
r2= Review.create(body: "Super interesting. Great book.", reviewer: "Ella", book_id: 2 )
r3= Review.create(body: "A little dry", reviewer: "Ella", book_id: 3 )
r4= Review.create(body: "Awesome book", reviewer: "Ella", book_id: 4 )
r5= Review.create(body: "Read this so fast!", reviewer: "Nate", book_id: 1 )
r6= Review.create(body: "SO GOOD!!", reviewer: "Nate", book_id: 2 )
r7= Review.create(body: "You all read this before me!", reviewer: "Emma", book_id: 2 )
r8= Review.create(body: "Many pages, much learns", reviewer: "Emma", book_id: 4 )
r9= Review.create(body: "Super good!", reviewer: "Emma", book_id: 5 )
r10= Review.create(body: "I really liked this!", reviewer: "Emma", book_id: 6 )
r11= Review.create(body: "This book has changed my life. I used to look down upon people who required 8 hours of sleep or more a night.", reviewer: "Emma", book_id: 7 )
r12= Review.create(body: "Many pages, much learns", reviewer: "Emma", book_id: 8 )
r13= Review.create(body: "Dr. Tyson put his all into this. Letters from an Astrophysicist isn’t just a book, it’s an encompassing of someone’s soul. Great read and price as always.", reviewer: "Nate", book_id: 8 )
r14= Review.create(body: "Great read", reviewer: "Nate", book_id: 7 )
r14= Review.create(body: "Just buy this - breakfast changed forever :)", reviewer: "Nate", book_id: 9 )
r15= Review.create(body: "Super helpful!!", reviewer: "Emma", book_id: 10 )
r16= Review.create(body: "Not dry!! Actually enjoyed it... ", reviewer: "Emma", book_id: 3 )
r17= Review.create(body: "Glad I read this - feel like I know a lot more about our history!", reviewer: "Nate", book_id: 5 )
