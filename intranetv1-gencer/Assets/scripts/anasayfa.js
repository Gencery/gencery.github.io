
//FAVORILERIM SLIDER
$(document).ready(function () {
  $(".autoplay").slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          vertical: true,
          verticalSwiping: true,
          slidesToScroll: 2,
        },
      },
    ],
  });
});
//HABERLER
$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: ".slider-nav",
    nextArrow: "<button>&#10095;</button>",
    prevArrow: "<button>&#10094;</button>",
    swipe: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          swipe: true,
        },
      },
    ],
  });
  $(".slider-nav").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    settings: "unslick",
    arrows: false,
  });
});
//DUYURU SLIDER
$(document).ready(function () {
  $("#kultursanat").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
//BUNLARI BİLİYOR MUYDUNUZ
$(document).ready(function () {
  $("#biliyormuydunuz-slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

/* SLIDESHOW*/
{
  let i = 0;
  let imgs = document.getElementById("slideshow").getElementsByClassName("slide");
  let radios = document.getElementById("slideshow").getElementsByTagName("input");
  let size = imgs.length;
  for (i of imgs) {
    i.style.display = "none";
  }
  i = 0;
  imgs[i].style.display = "block";
  radios[i].checked = true;

  function fwd() {
    imgs[i].style.display = "none";
    if (i == size - 1) i = -1;
    imgs[i + 1].style.display = "block";

    radios[i + 1].checked = true;
    i++;
  }
  function bwd() {
    imgs[i].style.display = "none";
    if (i == 0) i = size;
    imgs[i - 1].style.display = "block";

    radios[i - 1].checked = true;
    i--;
  }
  //radio button select
  function changeSlide(x) {
    imgs[i].style.display = "none";
    imgs[x].style.display = "block";
    i = x;
  }

  setInterval(() => fwd(), 10000);
}
//TARİH
(() => {
  let months = {
    0: "Ocak",
    1: "Şubat",
    2: "Mart",
    3: "Nisan",
    4: "Mayıs",
    5: "Haziran",
    6: "Temmuz",
    7: "Ağustos",
    8: "Eylül",
    9: "Ekim",
    10: "Kasım",
    11: "Aralık",
  };
  let date = new Date();
  document.getElementById("day").innerText = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

})();

//CLOCK MAINPAGE
function clockMain() {

  let date = new Date();
  hour = date.toString().slice(16, 21);

  document.getElementById("hour").innerText = hour;
}
clockMain();
setInterval(() => clockMain(), 1000 * 30);
{
  //HAVA DURUMU
  function getMiniIcon(icon) {
    let prefix = "./Assets/img/weather-icons";
    switch (icon) {
      case 1:
        return prefix + "/sunny.svg";
        break;
      case 2:
        return prefix + "/mostly-sunny.svg";
        break;
      case 3:
        return prefix + "/partly_sunny.svg";
        break;
      case 4:
        return prefix + "/intermittent-clouds.svg";
        break;
      case 5:
        return prefix + "/hazy_sunshine.svg";
        break;
      case 6:
        return prefix + "/mostly_cloudy.svg";
        break;
      case 7:
        return prefix + "/Cloudy.svg";
        break;
      case 8:
        return prefix + "/deary.svg";
        break;
      case 11:
        return prefix + "/fog.svg";
        break;
      case 12:
        return prefix + "/showers.svg";
        break;
      case 13:
        return prefix + "/mostly-cloudy-showers.svg";
        break;
      case 14:
        return prefix + "/partly-sunny-showers.svg";
        break;
      case 15:
        return prefix + "/t-stroms.svg";
        break;
      case 16:
        return prefix + "/mostly_cloudy_storms.svg";
        break;
      case 17:
        return prefix + "/partly_sunny-storms.svg";
        break;
      case 18:
        return prefix + "/rain.svg";
        break;
      case 19:
        return prefix + "/flurries.svg";
        break;
      case 20:
        return prefix + "/mostly_cloudy_flurries.svg";
        break;
      case 21:
        return prefix + "/partly_sunny_flurries.svg";
        break;
      case 22:
        return prefix + "/snow.svg";
        break;
      case 23:
        return prefix + "/mostly_cloudy_snow.svg";
        break;
      case 24:
        return prefix + "/ice.svg";
      case 25:
        return prefix + "aassets/svg/weather-icons/sleet.svg";
        break;
      case 26:
        return prefix + "/freezing_rain.svg";
        break;
      case 29:
        return prefix + "/rain_snow.svg";
        break;
      case 30:
        return prefix + "/hot.svg";
        break;
      case 31:
        return prefix + "/cold.svg";
        break;
      case 32:
        return prefix + "/windy.svg";
        break;
      case 33:
        return prefix + "/clear.svg";
        break;
      case 34:
        return prefix + "/mostly_clear.svg";
        break;
      case 35:
        return prefix + "/partly_cloudy.svg";
        break;
      case 36:
        return prefix + "/intermittent_clouds.svg";
        break;
      case 37:
        return prefix + "/hazy_moonlight.svg";
        break;
      case 38:
        return prefix + "/mostly_cloudy_night.svg";
        break;
      case 39:
        return prefix + "/partly_cloudy_showers.svg";
        break;
      case 40:
        return prefix + "/mostly_cloudy_showers.svg";
        break;
      case 41:
        return prefix + "/partly_cloudy_storms.svg";
        break;

      case 42:
        return prefix + "/mostly_cloudy_storms_night.svg";
        break;
      case 43:
        return prefix + "/mostly_cloudy_flurries.svg";
        break;
      case 44:
        return prefix + "/mostly_cloudy_snow.svg";
        break;
    }
  }
  function accuDateConvert(datestr) {
    let months = {
      1: "Ocak",
      2: "Şubat",
      3: "Mart",
      4: "Nisan",
      5: "Mayıs",
      6: "Haziran",
      7: "Temmuz",
      8: "Ağustos",
      9: "Eylül",
      10: "Ekim",
      11: "Kasım",
      12: "Aralık",
    };
    return datestr.slice(8, 10) + " " + months[parseInt(datestr.slice(5, 7))];
  }
  //today's weather
  fetch(
    "https://dataservice.accuweather.com/currentconditions/v1/318290?apikey=UfmE9tC8dbtVx5ckAGCXvWzHEg9qTfbX&language=tr-tr"
  )
    .then((resp) => resp.json())
    .then((data) => {
      let todayCard = document.getElementsByClassName("hd-card")[0];

      todayCard.children[1].children[1].setAttribute("src", getMiniIcon(data[0].WeatherIcon));

      todayCard.getElementsByClassName("hd-durum")[0].innerText = data[0].WeatherText;

      todayCard.getElementsByClassName("hd-sicaklik")[0].innerText =
        parseInt((data[0].Temperature.Metric.Value + "").slice(0, 2)) + "\u00B0";
    });
  fetch(
    "https://dataservice.accuweather.com/forecasts/v1/daily/5day/318290?apikey=UfmE9tC8dbtVx5ckAGCXvWzHEg9qTfbX&language=tr-tr&metric=true"
  )
    .then((resp) => resp.json())
    .then((data) => {
      function accuDateConvert(datestr) {
        let months = {
          1: "Ocak",
          2: "Şubat",
          3: "Mart",
          4: "Nisan",
          5: "Mayıs",
          6: "Haziran",
          7: "Temmuz",
          8: "Ağustos",
          9: "Eylül",
          10: "Ekim",
          11: "Kasım",
          12: "Aralık",
        };
        return parseInt(datestr.slice(8, 10)) + " " + months[parseInt(datestr.slice(5, 7))];
      }
      let hdcards = document.getElementsByClassName("hd-card");
      for (let i = 1; i < hdcards.length; i++) {
        //tarih
        hdcards[i].getElementsByClassName("hd-tarih")[0].innerText = accuDateConvert(
          data.DailyForecasts[i].Date
        );
        //span-sicaklik
        hdcards[i].getElementsByClassName("hd-sicaklik-minmax")[0].innerText =
          parseInt(data.DailyForecasts[i].Temperature.Maximum.Value) +
          "/" +
          parseInt(data.DailyForecasts[i].Temperature.Minimum.Value);
        //span-icon
        hdcards[i]
          .getElementsByClassName("hd-icon")[0]
          .setAttribute("src", getMiniIcon(data.DailyForecasts[i].Day.Icon));
        //durum
        hdcards[i].getElementsByClassName("hd-durum")[0].innerText =
          data.DailyForecasts[i].Day.IconPhrase;
      }
    });
}
//mobile touch swipe Gabor Szabo
(function () {
  var min_horizontal_move = 30;
  var max_vertical_move = 30;
  var within_ms = 1000;

  var start_xPos;
  var start_yPos;
  var start_time;
  function touch_start(event) {
    start_xPos = event.touches[0].pageX;
    start_yPos = event.touches[0].pageY;
    start_time = new Date();
  }

  function touch_end(event) {
    var end_xPos = event.changedTouches[0].pageX;
    var end_yPos = event.changedTouches[0].pageY;
    var end_time = new Date();
    let move_x = end_xPos - start_xPos;
    let move_y = end_yPos - start_yPos;
    let elapsed_time = end_time - start_time;
    if (
      Math.abs(move_x) > min_horizontal_move &&
      Math.abs(move_y) < max_vertical_move &&
      elapsed_time < within_ms
    ) {
      if (move_x < 0) {
        fwd();
      } else {
        bwd();
      }
    }
  }

  var content = document.getElementById("slideshow");
  content.addEventListener("touchstart", touch_start);
  content.addEventListener("touchend", touch_end);
})();

//PERSONEL ARAMA BAR
function filterByInput(minInputSize, inputElement, container) {
  let inputStr = inputElement.value;
  if (inputStr.length >= minInputSize || inputStr == "")
    for (let item of container.children) {
      if (item.innerText.includes(inputStr)) {
        item.style.display = "block";
      }
      else
        item.style.display = "none";
    }
}

function anasayfaPersonelArama() {

  let resultsContainer = document.getElementById("personelSearchResultsContainer");
  let inputElem = document.getElementById("personel-ara-bar-input").children[0];

  function removeDuplicatesInArray(arr) {
    let uniquesArr = [];
    for (let elem of arr)
      if (!uniquesArr.includes(elem))
        uniquesArr.push(elem)
    return uniquesArr;
  }
  function toInput(elem) {
    inputElem.value = elem.innerText;
  }
  function fillContainer(arr, container) {
    for (let elem of arr) {
      let newElem = document.createElement("p");
      newElem.innerText = elem;
      newElem.addEventListener("click", () => {
        toInput(newElem);
        filterByInput(3, inputElem, resultsContainer);
      });
      container.appendChild(newElem);
    }
    inputElem.value = "Personel";
  }
  fetch(
    "https://corsanywhere.herokuapp.com/http://universities.hipolabs.com/search?country=turkey"
  )
    .then((res) => res.json())
    .then((data) => {
      let uniNames = [];
      data.forEach(item => uniNames.push(item.name.toLowerCase()));
      uniNames = removeDuplicatesInArray(uniNames);
      uniNames.sort((a, b) => a > b);
      fillContainer(uniNames, resultsContainer);
    }
    )
}
anasayfaPersonelArama();

//Fetch Pop Up
(async () => {
  if (document.getElementsByTagName("popup")[0]) {
    document.getElementsByTagName("popup")[0].innerHTML = await (
      await fetch("./popUp.html")
    ).text();
    let popUp = document.getElementsByClassName("popUp")[0];
    if (window.getComputedStyle(popUp).display == "flex")
      document.body.style.overflow = "hidden";
  }
})();

