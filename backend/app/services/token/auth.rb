# fronzen_string_literal: true

module Token
  class Auth
    def self.generate
      SecureRandom.hex(10)
    end

    def self.valid?(token)
      decode(token).present?
    rescue JWT::DecodeError
      false
    end

    def self.decode(token)
      JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256').first
    end

    def self.encode(payload)
      JWT.encode(payload, Rails.application.secrets.secret_key_base, 'HS256')
    end

    def self.valid_payload(payload)
      return false if payload.blank?

      payload['user_id'].present?
    end

    def self.user_id_from_token(token)
      payload = decode(token)
      payload['user_id']
    end

    def self.user_from_token(token)
      User.find(user_id_from_token(token))
    end


  end
end
