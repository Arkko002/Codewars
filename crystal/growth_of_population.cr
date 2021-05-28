def nb_year(p0, percent, aug, p)
  curr_pop = p0
  years = 0
  while curr_pop < p
    curr_pop += (curr_pop * (percent / 100)).floor + aug
    years += 1
  end

  years
end
