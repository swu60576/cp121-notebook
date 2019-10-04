async function df() {
  myurl = "https://data.cityofnewyork.us/api/views/25th-nujf/rows.csv";
  a = await $.get(myurl);
  return a;
}

k = df().then(displaydata);

function displaydata(text) {
  let nFemale = 0;
  let words = text.split(",");
  for (let i = 0; i < words.length; ++i) {
    if (words[i] == "FEMALE") ++nFemale;
  }
  write(nFemale);
}
