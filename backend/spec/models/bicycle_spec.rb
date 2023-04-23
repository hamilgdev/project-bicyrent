# fronzen_string_literal: true

require 'rails_helper'

RSpec.describe Bicycle, type: :model do
  describe 'validations' do
    it 'validate presence of requerid fields' do
      should validate_presence_of(:color)
      should validate_presence_of(:model)
    end

    it 'validate association with user' do
      should belong_to(:user)
    end
  end
end
