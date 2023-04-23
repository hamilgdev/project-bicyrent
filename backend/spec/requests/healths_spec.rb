# fronzen_string_literal: true

require 'rails_helper'

RSpec.describe 'Healths', type: :request do
  describe 'GET /healths' do
    before { get '/api/healthcheck' }

    it 'returns http OK' do
      payload = JSON.parse(response.body)

      expect(payload).not_to be_empty
      expect(payload['api']).to eq('ok')
    end
  end
end
