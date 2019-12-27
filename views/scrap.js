<% sortedDogs = (a, b) => {
    const dogA = a.firsts;
    const dogB = b.firsts;
  
    let comparison = 0;
    if (dogA > dogB) {
      comparison = 1;
    } else if (dogA < dogB) {
      comparison = -1;
    }
    return comparison;
  }
  
  dogs.sort(sortedDogs)
  %>
  