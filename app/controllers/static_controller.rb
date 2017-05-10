class StaticController < ApplicationController
  def map
    @addresses = Address.all
  end

  def save_address
    Address.create(latitude: params[:latitude], longitude: params[:longitude], address: params[:address])
    @addresses = Address.all
    respond_to do |format|
      format.js
    end
  end

  def delete_addresses
    Address.delete_all
    @addresses = Address.all
    respond_to do |format|
      format.js
    end
  end
end
