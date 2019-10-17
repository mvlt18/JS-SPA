class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :image
  has_many :reviews 
end
