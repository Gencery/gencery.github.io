async function getData(hat) {
  const hsUrl = "https://openapi.izmir.bel.tr/api/eshot/hareketsaatleri/" + hat;
  const response = await fetch(hsUrl);
  let data = await response.json();
  let hourList = document.getElementById("hourList");
  data = data.HareketSaatleriHici;

  let now = new Date().toLocaleTimeString("en-US", {timeZone: "Europe/Istanbul", hour12: false});

  let nowHour = Number.parseInt(now.slice(0,2));
  let nowMin = Number.parseInt(now.slice(3,5));

  let counter = 0;
  createAppendElem("h3", hat);
  for (let i = 0; i < data.length; i++) {
    //console.log(data[i].DonusSaat);
    let ds = data[i].DonusSaat;
    if (
      nowHour * 60 + nowMin <=
      parseInt(data[i].DonusSaat.slice(0, 2)) * 60 +
        parseInt(data[i].DonusSaat.slice(3, 5))
    ) {
      //document.write(data[i].DonusSaat + "<br>");
      createAppendElem("p", data[i].DonusSaat);
      counter++;
      if (counter == 2) i = data.length;
    }
  }
}
function createAppendElem(x, inner) {
  let elem = document.createElement(x);
  elem.textContent = inner;
  document.body.appendChild(elem);
}
getData("267");
getData("505");