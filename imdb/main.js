function toGoogle(str) {
  return str.split(" ").join("+") + "+movie+imdb";
}

function msg(msg) {
  document.getElementById("msg").innerText = msg;
}

function extractMovieDetails(link) {
  const regex = /href="https:\/\/www\.imdb\.com\/title\/(tt\d+)\/".*?<h3.*?>(.*?)<\/h3>/;
  const match = link.match(regex);

  if (match) {
    const movieId = match[1]; // The IMDb ID (e.g., tt0371746)
    const movieName = match[2]; // The movie name (e.g., Iron Man (2008) - IMDb)
    return { movieId, movieName };
  }
}

function loadMovie(movieId) {
  video.innerHTML = /*html*/`
          <iframe src="https://vidsrc.vc/embed/movie/${movieId}"></iframe>
        `
}

function search(query) {
  if (!query) return
  video.innerHTML = "";
  msg("Aranıyor...");


  fetch(`https://api.cors.lol/?url=https://www.google.com/search?q=${encodeURIComponent(toGoogle(query))}`)
    .then(res => res.text())
    .then(data => {
      let links = data.match(/<a.*?<\/a/ig);
      let movies = links.map(link => extractMovieDetails(link)).filter(movie => movie);
      //console.log(movies);

      let resultButtons = "";
      movies.forEach(movie =>
        resultButtons += `<button onclick="loadMovie('${movie.movieId}')">${movie.movieName}</button>`)
      results.innerHTML = resultButtons;
      msg(`${movies.length} sonuç bulundu.`);
    });


}


//msg("Bir hata oldu. Tekrar deneyiniz.");