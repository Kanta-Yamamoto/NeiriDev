class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
        # skip_before_action :verify_authenticity_token, if: :devise_controller?
        skip_before_action :your_method_name, raise: false
        helper_method :current_user, :user_signed_in?
end
