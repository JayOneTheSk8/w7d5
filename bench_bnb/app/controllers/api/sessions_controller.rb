class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render :show
    else
      render json: ['invalid username or password'], status: 401
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    if logged_in?
      log_out!
      render json: {}
    else
       render json: ["Not logged in!"], status: 404
    end
  end
end
