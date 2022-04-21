//State
var isLoggedIn = false;
//Fetch header, footer
(async () => {
  //fetch header
  if (document.getElementsByTagName("header")[0])
    document.getElementsByTagName("header")[0].innerHTML = await (
      await fetch("./header.html")
    ).text();
  //fetch footer
  if (document.getElementsByTagName("footer")[0])
    document.getElementsByTagName("footer")[0].innerHTML = await (
      await fetch("./footer.html")
    ).text();
  {
    let copyright = document.createElement("p");
    let copyrightYear = new Date().getFullYear();
    copyright.innerText = copyrightYear + " Yazılım Şube Müdürlüğü";
    document.getElementsByTagName("footer")[0].appendChild(copyright);
  }
  if (!isLoggedIn) {
    document.getElementById("hesabim-cikis").style.display = "none";
    document
      .getElementsByClassName("navmenulist-head")[0]
      .getElementsByTagName("img")[0].style.display = "none";
  }
  {
    //SONRA DÜZELTİLECEK
    //copy yetkiler to search results container
    let yetkiler = document
      .getElementsByClassName("navmenulist-content")[0]
      .getElementsByTagName("a");

    let searchResultsContainer = document.getElementById(
      "searchResultsContainer"
    );

    for (let elem of yetkiler) {
      let newElem = document.createElement("a");
      newElem.setAttribute("href", elem.getAttribute("href"));
      newElem.innerText = elem.innerText;
      newElem.style.display = "none";
      searchResultsContainer.append(newElem);
    }
  }
  //Tüm linkler ayrı sayfada açılsın
  let anchors = document.getElementsByTagName("a");
  for (let anchor of anchors)
    anchor.setAttribute("target", "_blank");
})();

function openSideMenu() {
  let navMenu = document.getElementById("navmenu");
  navMenu.style.display = "fixed";
  navMenu.style.width = "100%";
  document.body.style.overflow = "hidden";
}
function closeSideMenu() {
  let navMenu = document.getElementById("navmenu");
  navMenu.style.width = "0%";
  document.body.style.overflow = "visible";
}
function openLoginModal() {
  document.getElementsByClassName("loginModal-inner")[0].children[0];
  if (isLoggedIn) {
    window.open(profilSayfasi, "_self");
    return;
  }
  let loginModal = document.getElementsByClassName("loginModal")[0];
  loginModal.style.visibility = "visible";
  document.body.style.overflow = "hidden";
  //add animations
  document.getElementsByClassName("loginModal-inner")[0].children[0].style[
    "animation-name"
  ] = "animLoginModal";
  document.getElementsByClassName("loginModal-inner")[0].style[
    "animation-name"
  ] = "animLoginModal3";
  document.getElementsByClassName(
    "loginModal-inner"
  )[0].children[1].children[0].style["animation-name"] = "animLoginModal2";
}
function closeLoginModal() {
  let loginModal = document.getElementsByClassName("loginModal")[0];
  loginModal.style.visibility = "hidden";
  document.body.style.overflow = "visible";
  //remove animations
  document.getElementsByClassName("loginModal-inner")[0].children[0].style[
    "animation-name"
  ] = "unset";
  document.getElementsByClassName("loginModal-inner")[0].style[
    "animation-name"
  ] = "unset";
  document.getElementsByClassName(
    "loginModal-inner"
  )[0].children[1].children[0].style["animation-name"] = "unset";
}
//Logout confirm modal
function openLogoutModal() {
  let loginModal = document.getElementsByClassName("logoutModal")[0];
  loginModal.style.visibility = "visible";
}
function closeLogoutModal() {
  let loginModal = document.getElementsByClassName("logoutModal")[0];
  loginModal.style.visibility = "hidden";
}

function login() {
  function buttonName(name) {
    name = name.split("_");
    name[0] = name[0].split("");
    name[1] = name[1].split("");
    name[0][0] = name[0][0].toUpperCase();
    name[1][0] = name[1][0].toUpperCase();
    name = [...name[0], " ", ...name[1]];
    name = name.join("");
    return name;
  }

  let loginModal = document.getElementsByClassName("loginModal")[0];
  let name = loginModal.getElementsByTagName("input")[0].value;
  let pass = loginModal.getElementsByTagName("input")[1].value;

  if (pass == "1234") {
    //success
    closeLoginModal();
    //giris butonu profil sayfasına yönlendirsin
    let profilSayfasi = "./profilim.html";
    document.getElementById("giris-button-outer").innerHTML =
      "<a href=" +
      profilSayfasi +
      " 'target='_blank'>" +
      buttonName(name) +
      "</a>";
    document
      .getElementsByClassName("navmenulist-head")[0]
      .getElementsByTagName("p")[0].innerText = buttonName(name);
    document.getElementById("hesabim-cikis").style.display = "block";
    document
      .getElementsByClassName("navmenulist-head")[0]
      .getElementsByTagName("img")[0].style.display = "block";

    //yetki mesajını sakla
    let yetkiMesaji = (document.getElementById("yetkiMesaji").style.display =
      "none");
    //yetkileri göster
    let yetkiler = document
      .getElementsByClassName("navmenulist-content")[0]
      .getElementsByTagName("span");
    for (let i = yetkiler.length; i > 4; i--)
      yetkiler[i - 1].style.display = "inline-block";
    isLoggedIn = true;
  } else {
    document
      .getElementsByClassName("loginModal-inner")[0]
      .getElementsByTagName("p")[0].innerHTML =
      "Hatalı kullanıcı adı veya şifre!";
  }
}
function logout() {
  document.getElementById("hesabim-cikis").style.display = "none";
  document.getElementById("giris-button-outer").innerHTML = "Kullanıcı Girişi";
  document
    .getElementsByClassName("navmenulist-head")[0]
    .getElementsByTagName("p")[0].innerText = "MENÜ";
  document
    .getElementsByClassName("navmenulist-head")[0]
    .getElementsByTagName("img")[0].style.display = "none";
  //yetkileri sakla
  let yetkiler = document
    .getElementsByClassName("navmenulist-content")[0]
    .getElementsByTagName("span");
  for (let i = yetkiler.length; i > 4; i--)
    yetkiler[i - 1].style.display = "none";
  //yetki mesajını göster
  let yetkiMesaji = (document.getElementById("yetkiMesaji").style.display =
    "block");
  isLoggedIn = false;
}

//YETKI ARAMA NAVBAR
function showYetkiSearch() {
  let item = document.getElementsByClassName("navbar-input")[0];
  item.style["visibility"] = "visible";
  item.style.width = "100%";
  item.value = "";
}
function searchYetki() {
  let input = document.getElementsByClassName("navbar-input")[0].value;
  let searchResultsContainer = document.getElementById(
    "searchResultsContainer"
  );
  let yetkiler = searchResultsContainer.getElementsByTagName("a");

  for (let i = 0; i < yetkiler.length - 1; i++)
    if (
      yetkiler[i].innerText.toLowerCase().indexOf(input.toLowerCase()) == 0 &&
      input !== ""
    )
      yetkiler[i].style.display = "block";
    else yetkiler[i].style.display = "none";
}

function changeDateFormat(elem) {
  let dateString = elem.value;
  dateString = dateString.split("-");
  dateString = dateString[2] + "." + dateString[1] + "." + dateString[0];
  elem.value = dateString;
}
//input date change type from text to date
function typeChange(x) {
  x.setAttribute("type", "date");
  x.setAttribute("value", new Date().toLocaleDateString().split(".").reverse().join("-"));
}
//LOADING SCREEN
(function createLoadingScreen() {
  //
  let loader = document.createElement("div");
  loader.setAttribute("id", "loaderContainer");
  //
  let innerLoader = document.createElement("div");
  loader.appendChild(innerLoader);
  innerLoader.classList.add("loader");
  //LOGO
  let logoLoader = document.createElement("img");
  logoLoader.setAttribute("src", "./Assets/img/loader3.png")
  loader.appendChild(logoLoader);
  logoLoader.classList.add("logoLoader");

  document.body.getElementsByTagName("main")[0].appendChild(loader);
})();

function toggleLoadingScreenDisplay() {
  let loadingScreen = document.getElementById("loaderContainer");
  if (window.getComputedStyle(loadingScreen).visibility == "visible") {
    loadingScreen.style.visibility = "hidden";
  }
  else {
    loadingScreen.style.visibility = "visible";
  }
}
