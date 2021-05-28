def evaporator(content, evap_per_day, threshold)
  tresh_ml = content * (threshold / 100)
  current_ml = content
  day = 0

  while current_ml > tresh_ml
    current_ml -= current_ml * (evap_per_day / 100)
    day += 1
  end

  day
end
