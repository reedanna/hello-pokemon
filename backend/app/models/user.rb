class User < ApplicationRecord
    has_secure_password
    validates :name, uniqueness: { case_sensitive: false }
    has_many :teams
    has_many :pokemon, through: :teams
end
