class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  # def new
  # end

  def create
    Book.create(title: book_params[:title], author: book_params[:author])
    redirect_to :books
  end

  def destroy
    Book.find(params[:id]).destroy
    redirect_to :books
  end

  private
  def book_params
    params.require(:book).permit(:title, :author, :id)
  end
end
