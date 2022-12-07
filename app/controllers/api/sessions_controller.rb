class Api::SessionsController < ApplicationController

def show
    if current_user
      @user = current_user
      # render template: 'api/users/show'
      # render json: { user: @user }
      render 'api/users/show'
    else
      render json: { user: nil }
    end
  end

  def create
    @user = User.find_by_credentials(params[:credential], params[:password])
    
    if @user
      login!(@user)
      # render template: 'api/users/show'
      # render json: { user: @user }
      render 'api/users/show'
    else
      if params[:credential].match?(URI::MailTo::EMAIL_REGEXP)
        render json: { errors: ["The password you entered is incorrect. Try again"] }, status: :unauthorized
      else 
        render json: { errors: ["Hmm...that doesn't look like an email address."] }, status: :unauthorized
      end
    end
  end

  def destroy
    return unless current_user

    logout!
    render json: { message: 'success' }
    
  end
end
