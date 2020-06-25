class Api::DemosController < ApplicationController
  def show
    @user = User.find_by_credentials('test@gmail.com', 'password')

    if @user
      login(@user)
      render 'api/users/create'
    else
      message =
        if User.find_by({ email: email })
          { 'password' => 'The password you’ve entered is incorrect.' }
        else
          {
            'email' => 'The username you’ve entered doesn’t match any account.'
          }
        end
      render json: message, status: 422
    end
  end
end
