# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

Bench.create!(description: 'Mission Bay', lat: 37.777715, lng: -122.400267)
Bench.create!(description: 'Dogpatch', lat: 37.757963, lng: -122.388688)
Bench.create!(description: 'Outer Sunset', lat: 37.760087, lng: -122.501659)
