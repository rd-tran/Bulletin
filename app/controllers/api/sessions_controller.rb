class Api::SessionsController < ApplicationController
  def create
    email = params[:user][:email]
    password = params[:user][:password]
    @user = User.find_by_credentials(email, password)

    if @user
      login(@user)
      render 'api/users/create'
    else
      message = if User.find_by({ username: username })
                  ['The password you’ve entered is incorrect.']
                else
                  ['The username you’ve entered doesn’t match any account.']
                end
      render json: message, status: 422
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: {}, status: 404
    end
  end
end
