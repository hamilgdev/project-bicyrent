# fronzen_string_literal: true

class Bicycle < ApplicationRecord
  belongs_to :user

  validates :color, presence: true
  validates :model, presence: true
  validates :latitude, presence: true
  validates :length, presence: true

  before_create :generate_uid

  def generate_uid
    self.uid ||= SecureRandom.hex(5)
  end
end
