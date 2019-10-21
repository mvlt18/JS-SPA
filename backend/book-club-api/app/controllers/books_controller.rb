class BooksController < ApplicationController
  before_action :set_params, only: [:show, :update, :destroy]

  def index
    @books = Book.all
    render json: @books, only: [:id, :title, :author, :image], status: 200
  end

  def create
    # binding.pry
    @book = Book.create(book_params)
    render json: @book, status: 200
  end

  def show
    render json: @book, status: 200
  end

  def update
    @book.update(book_params)
    if @book.save
      render json: @book, status: 200
    else
      render json: { errors: @book.errors.full_messages }, status: 422
    end
  end

  def destroy
    @book.destroy
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :image)
  end

  def set_params
    @book = Book.find(params[:id])
  end
end
