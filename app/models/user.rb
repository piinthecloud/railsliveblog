class User < ActiveRecord::Base

  has_many :comments
  has_many :posts, through: :comments
  has_secure_password

end
