class PostsController < ApplicationController

  def index
    @posts = Post.all

  end

  def new
    @posts = Post.new
  end

  def create
    @post = Post.new(params.require(:post).permit(:title, :content))
    if @post.save
      redirect_to root_path
    else
    end
  end

end
