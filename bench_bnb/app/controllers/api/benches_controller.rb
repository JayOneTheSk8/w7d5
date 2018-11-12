class Bench < ApplicationController

  def index
    @benches = Benches.all
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :index
    else
      render @bench.errors.full_messages, status: 422
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
