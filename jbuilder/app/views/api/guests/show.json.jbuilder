
json.name @guest.name
json.age @guest.age
json.favorite_color @guest.favorite_color
json.gifts do
  json.array! @guest.gifts do |gift|
    json.extract! gift, :title, :description
  end
end
