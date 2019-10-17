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
b2 = Book.create(title: "The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution", author: "Walter Isaacson", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1410191571i/21856367._UY475_SS475_.jpg")
b3 = Book.create(title: "Einstein: His Life and Universe", author: "Walter Isaacson", image: "https://images-na.ssl-images-amazon.com/images/I/51aQOSZp3xL._SX334_BO1,204,203,200_.jpg")
b4 = Book.create(title: "Computer Science: An Interdisciplinary Approach", author: "Kevin Wayne and Robert Sedgewick", image: "https://images-na.ssl-images-amazon.com/images/I/51FSQK5-FJL._SX395_BO1,204,203,200_.jpg")
# b5 = Book.create(title: "Brotopia: Breaking Up the Boys' Club of Silicon Valley", author: "Emily Chang", image: "https://images-na.ssl-images-amazon.com/images/I/8123KNmCz1L.jpg")
# b6 = Book.create(title: "Brotopia: Breaking Up the Boys' Club of Silicon Valley", author: "Emily Chang", image: "https://images-na.ssl-images-amazon.com/images/I/8123KNmCz1L.jpg")
# b7 = Book.create(title: "Brotopia: Breaking Up the Boys' Club of Silicon Valley", author: "Emily Chang", image: "https://images-na.ssl-images-amazon.com/images/I/8123KNmCz1L.jpg")
# b8 = Book.create(title: "Brotopia: Breaking Up the Boys' Club of Silicon Valley", author: "Emily Chang", image: "https://images-na.ssl-images-amazon.com/images/I/8123KNmCz1L.jpg")


r1= Review.create(body: "Awesome book, a must read!!", reviewer: "Ella", book_id: 1 )
r2= Review.create(body: "Super interesting. Great book.", reviewer: "Ella", book_id: 2 )
r3= Review.create(body: "A little dry", reviewer: "Ella", book_id: 3 )
r4= Review.create(body: "Awesome book", reviewer: "Ella", book_id: 4 )
r5= Review.create(body: "Read this so fast!", reviewer: "Nate", book_id: 1 )
r6= Review.create(body: "SO GOOD!!", reviewer: "Nate", book_id: 2 )
r7= Review.create(body: "You all read this before me!", reviewer: "Emma", book_id: 2 )
r8= Review.create(body: "Many pages, much learns", reviewer: "Emma", book_id: 4 )
