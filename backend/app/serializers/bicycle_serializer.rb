# fronzen_string_literal: true

class BicycleSerializer < ActiveModel::Serializer
  attributes :uid, :color, :model, :ubication, :owner

  def owner
    user = object.user

    { uid: user.uid, name: user.full_name, email: user.email }
  end

  def ubication
    { lat: object.latitude, lng: object.length }
  end
end
