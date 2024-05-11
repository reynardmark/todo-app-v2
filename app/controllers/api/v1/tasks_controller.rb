class Api::V1::TasksController < ApplicationController
  before_action :set_task, only: %i[ update destroy ]
  before_action :authenticate

  # GET /tasks
  def index
    tasks = current_user.tasks

    render json: tasks
  end

  # POST /tasks
  def create
    @task = current_user.tasks.new(task_params)

    if @task.save
      render json: @task, status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy!
  end

  # DELETE /tasks
  def destroy_all
    current_user.tasks.destroy_all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = current_user.tasks.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:name, :completed)
    end
end
