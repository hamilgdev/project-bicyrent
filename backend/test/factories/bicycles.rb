# fronzen_string_literal: true

FactoryBot.define do
  factory :bicycle do
    color { Faker::Color.color_name }
    model { Faker::Lorem.word }
    latitude { Faker::Number.positive }
    length { Faker::Number.negative }

    user { association :user }
  end
end
