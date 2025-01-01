function toGoogle(str) {
  return str.split(" ").join("+");
}

function search(query) {
  fetch(`https://api.cors.lol/?url=https://www.google.com/search?q=${encodeURIComponent(toGoogle(query))}`)
    .then(res => res.text())
    .then(data => {
      let results = data.match(/title\/tt.*?\//ig);
      console.log(results)
      if (results && results.length) {
        let id = results[0].slice(results[0].indexOf("tt") + 2,
          - 1);
        document.getElementById("movieId").innerText = id;
        document.getElementById("video").setAttribute("src", `https://vidsrc.vc/embed/movie/tt${id}`)
      }
      else {
        document.getElementById("movieId").innerText = "Bulunamadı :(";
      }
    });
}

