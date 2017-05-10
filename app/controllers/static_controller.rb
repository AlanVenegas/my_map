class StaticController < ApplicationController
  def map
  end

  def save_address
    Address.create(latitude: params[:latitude], longitude: params[:longitude], address: params[:address])
  end
end
