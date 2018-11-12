json.benches do
  @benches.each do |bench|
    json.extract! bench, :id, :description, :lat, :lng
  end
end
