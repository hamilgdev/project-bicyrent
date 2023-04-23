# fronzen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it 'validate presence of required fields ' do
      should validate_presence_of(:name)
      should validate_presence_of(:email)
    end

    it 'validate has many posts' do
      should have_many(:bicycles)
    end
  end
end
