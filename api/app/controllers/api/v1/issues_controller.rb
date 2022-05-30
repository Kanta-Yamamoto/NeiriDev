class Api::V1::IssuesController < ApplicationController
  # before_action :authenticate_api_v1_user!, only: [:create, :update,:destroy]

  def index
    set_issue
    render json: @issue
  end

  def create
    @issue = Issue.new(content: params[:content])
    @issue.user_id = current_api_v1_user.id

    if @issue.save
      render json:{ status: 'SUCCESS', message: 'Saved issue', data: @issue }, status: :ok
    else
      render json:{ status: 'ERROR', message: 'Issue not saved', data: @issue.errors }, status: :unprocessable_entity
    end

  end

  def update
    @issue = Issue.find(params[:id])
    @issue.update_attributes(content: params[:content])
    render json: @issue
  end

    def destroy
    @issue = Issue.find(params[:id])
    if @issue.destroy
      head :no_content, status: :ok
    else
      render json: @issue.errors, status: :unprocessable_entity
    end
  end

  private

  def set_issue
    user_id = current_api_v1_user.id
    user = User.find(user_id) || User.new()
    @issue = user.issues
  end



end
