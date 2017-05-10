class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.string :latitude
      t.string :longitude
      t.string :address

      t.timestamps
    end
  end
end
