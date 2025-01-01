function toGoogle(str) {
  return str.split(" ").join("+") + "movie+imdb";
}

function msg(msg) {
  document.getElementById("msg").innerText = msg;
}

function search(query) {
  msg("Aranıyor...");

  fetch(`https://api.cors.lol/?url=https://www.google.com/search?q=${encodeURIComponent(toGoogle(query))}`)
    .then(res => res.text())
    .then(data => {
      let results = data.match(/title\/tt.*?\//ig);
      console.log(results)
      if (results && results.length) {
        let id = results[0].slice(results[0].indexOf("tt") + 2,
          - 1);
        msg(id);
        document.getElementById("video").setAttribute("src", `https://vidsrc.vc/embed/movie/tt${id}`)
      }
      else {
        msg("Bulunamadı :(");
      }
    });
}

