# fronzen_string_literal: true

class User < ApplicationRecord
  has_many :bicycle

  validates :full_name, presence: true
  validates :email, presence: true, uniqueness: true

  before_create :generate_uid
  after_initialize :generate_auth_token

  def generate_uid
    self.uid ||= SecureRandom.hex(5)
  end

  def generate_auth_token
    return if auth_token.present?

    self.auth_token = Token::Auth.generate
  end

  def update_token
    update(auth_token: Token::Auth.generate)
  end

  def revoke_token
    update(auth_token: '')
  end
end
