class ReviewsController < ApplicationController
  before_action :set_params, only: [:show, :update, :destroy]

  def index
    @reviews = Review.all
    render json: @reviews, status: 200
  end

  def create
    @review = Review.create(review_params)
    render json: @review, status: 200
  end

  def show
    render json: @review, status: 200
  end

  def update
    @review.update(review_params)
    if @review.save
      render json: @review, status: 200
    else
      render json: { errors: @review.errors.full_messages }, status: 422
    end
  end

  def destroy
    @review.destroy
  end

  private

  def review_params
    params.require(:review).permit(:body, :reviewer, :book_id)
  end

  def set_params
    @review = Review.find(params[:id])
  end
end
