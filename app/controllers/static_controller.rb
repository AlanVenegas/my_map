class StaticController < ApplicationController
  def map
  	@addresses = Address.all
  end

  def save_address
    Address.create(latitude: params[:latitude], longitude: params[:longitude], address: params[:address])
  end

  def delete_addresses
  	Address.delete_all
  end
end
