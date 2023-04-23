# frozen_string_literal: true

module Search
  class Bicycle
    def self.search(bicycle, query)
      return bicycle if query.blank?

      bicycle_ids = Rails.cache.fetch("bicycle_ids/#{query}") do
        bicycle.where('color LIKE :query OR model LIKE :query', query: "%#{query}%").ids
      end

      bicycle_ids.any? ? bicycle.where(id: bicycle_ids) : bicycle.none
    end
  end
end
