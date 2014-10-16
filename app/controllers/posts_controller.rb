class PostsController < ApplicationController

  # before_action :require_login, only: [:new, :create, :edit, :update]

  def index
    @posts = Post.all

  end

  def new
    @post = Post.new
  end

  def create
    # raise params.inspect
    # @post = Post.new(title: params[:title], content: params[:content])
    # @post = Post.new(params.require(:post).permit(:title, :content))
    @post = Post.new(params.require(:banana).permit(:title, :content))
    if @post.save
      redirect_to postpage_path
    else
      render :new
    end
  end




  def edit
    #find_post
    @post = Post.find(params[:id])

  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
    redirect_to postpage_path
    else
      render :edit
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      redirect_to postpage_path
    end
  end

  # def find_post
  #   @post = Post.find(params[:id])
  # end

  def about_me
  end

  private

  def post_params
    params.require(:banana).permit(:title, :content)
  end


end
