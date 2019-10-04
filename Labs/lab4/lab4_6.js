async function df() {
  myurl = "https://data.cityofnewyork.us/api/views/25th-nujf/rows.csv";
  a = await $.get(myurl);
  return a;
}

k = df().then(displaydata);

function displaydata(text) {
  let words = text.split(",");
  for (let i = 0; i < words.length; ++i) {
    type(words[i] + " | ");
  }
}
