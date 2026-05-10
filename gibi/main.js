fetch("https://www.diziizle.now/player/?v=71721", {
  "credentials": "omit",
  "referrer": "https://www.diziizle.now/gibi-4-sezon/bolum-4/",
}).then(res => res.text())
  .then(data => {
    const regex = /videoembed\/(\d+)/;
    const match = data.match(regex);

    if (match) {
      const videoId = match[1];
      console.log(videoId); // Output: 9939628526291
    }
  });


//
{
  let seasons =
    [...document.getElementsByTagName("tbody")]
      .slice(1, 7)
      .map(tbody => [...tbody.children].slice(1))

  let result = {};
  seasons.forEach((season, i) => {
    result[i + 1] = season
  })

  console.log(result);
}