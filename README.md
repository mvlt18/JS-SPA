# Home Grown Books

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/9hr1mlfxklrpiitidir7.png)

Home Grown Books is a Single Page Application (SPA) with a JavaScript frontend, a backend API built with Ruby and Rails,  and a PostgreSQL database.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/v0tzrrt7213bna31a7py.png)

Starting this project, I wanted to keep it as simple as possible to give myself the focus to understand how all the pieces work together before jumping into a super complicated app! Users have the ability to add and delete books - as well as add reviews to books they have read.  

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/8yo0mn248xfoz84l8m6g.png)

The first thing I built was the backend - looking back, this was simple compared to what was coming in the frontend.

For the backend architecture - I only have two models - Book and Reviews.

Book has_many Reviews
Reviews belong_to Book

I created the necessary controller actions and serializers to display the json. I used the gem 'active_model_serializers' and added the associations between these two models so when I visited the index page on localhost:3000/books - you have all books and all associated reviews for each book.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/tea8m70vnutsq8l6jlto.png)

For the frontend, I built App, Books, Book, and BooksAdapter classes to organize the Javascript code.

I built 4 AJAX calls covering 3 of the CRUD (CREATE, READ, UPDATE, DESTROY) actions summarized below:

CREATE
*Create a book
*Create a new review

READ
*List all Books

DELETE
*Delete a book

 ## Installation

 * Install Ruby 2.6.1 on your local computer
 * Fork the repository from https://github.com/mvlt18/js-spa
 * Clone the repository into a directory of your choice with `git clone git@github.com:mvlt18/js-spa.git`
 * Navigate to the directory with `cd js-spa`
 * Run `bundle install`
 * Create the program tables by running `rake db:create` then  `rake db:migrate`
 * Seed data is provided by running `rake db:seed`
 * Open up a server of your choice


 ## Demo

https://youtu.be/vJJXqKpJlA0

 ## Contributing

 You can make a request or report a bug by creating an issue or by submitting a pull request.
 * Create a branch named after the feature or bug.
 * Write your code and commit changes/issue with a commit message.
 * Push the branch to the master branch.
 * Create a pull request, explaining the issue/reason for change/feature addition.

 ## License

 Fresh Bites is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

Home Page image from: https://unsplash.com
