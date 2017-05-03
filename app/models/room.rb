class Room < ActiveRecord::Base
  belongs_to :user

  validates :name, presence: true
  validates :user_id, presence: true
  validates_uniqueness_of :user_id
end
