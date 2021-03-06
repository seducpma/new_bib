class CreateRoles < ActiveRecord::Migration
  def self.up
    create_table "roles" do |t|
      t.string :name
    end
    
    # generate the join table
    create_table "roles_users" do |t|
      t.integer "role_id", "user_id"
    end
    add_index "roles_users", "role_id"
    add_index "roles_users", "user_id"
    Role.create :name => "admin"
    Role.create :name => "escola"
    Role.create :name => "responsavel"

  end

  def self.down
    drop_table "roles"
    drop_table "roles_users"
  end
end