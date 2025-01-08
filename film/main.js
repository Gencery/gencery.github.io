function msg(msg) {
  document.getElementById("msg").innerText = msg;
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


  fetch(`https://www.omdbapi.com/?apikey=a4285afa&s=${query}`)
    .then(res => res.json())
    .then(data => {
      let movies = data.Search;

      let resultButtons = "";
      movies.forEach(movie =>
        resultButtons += /*html*/`
          <button onclick="loadMovie('${movie.imdbID}')">
            <img src='${movie.Poster}' alt="movie poster">
            <span>${movie.Title} - ${movie.Year}</span>
          </button>`)
      results.innerHTML = resultButtons;
      msg(`${movies.length} sonuç bulundu.`);
    });


}


//msg("Bir hata oldu. Tekrar deneyiniz.");
