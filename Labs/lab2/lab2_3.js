//algorithm 1
function weather1(temp, wind, pres) {
  let predict = "No rain";
  if (temp > 70) {
    if (wind > 2) {
      if (pres > 26) {
        predict = "Rain";
      }
    }
  } else {
    if (wind > 4.5) {
      predict = "Rain";
    } else {
      if (pres > 31) {
        predict = "Rain";
      }
    }
  }
  return predict;
}

let now = weather1(10, 1.5, 42);
write(now);

//algorithm 2
function weather2(temp, wind, pres) {
  let predict = "No rain";
  if (
    (temp > 70 && wind > 2 && pres > 26) ||
    ((temp < 70 && wind > 4.5) || (temp < 70 && wind < 4.5 && pres > 31))
  ) {
      predict = "Rain";
    }
    
  return predict;
}

now = weather2(10, 1.5, 42);
write(now);
