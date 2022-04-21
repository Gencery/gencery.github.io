//Get number of notifications
let bildirimler = document.getElementById("bildirim-box").getElementsByTagName("a");
document.getElementById("bildirimSayisi").innerText = bildirimler.length;
//Logout confirm modal
function openLogoutModal() {
  let loginModal = document.getElementsByClassName("logoutModal")[0];
  loginModal.style.visibility = "visible";
}
function closeLogoutModal() {
  let loginModal = document.getElementsByClassName("logoutModal")[0];
  loginModal.style.visibility = "hidden";
}
function logout() {
  isLoggedIn = false;
  window.open("./anasayfa.html", "_self");
}
function closeBildirimBox(x) {
  x.style.display = "none";
  document.getElementById("bildirim-box").style.display = "none";
  document.body.style.overflow = "unset";
}
function openBildirimBox() {
  document.getElementById("bildirim-box").style.display = "block";
  document.getElementById("bildirim-box-exit").style.display = "block";
  document.getElementById("bildirimSayisi").style.display = "none";
  document.body.style.overflow = "hidden";
}

{
  let copyright = document.createElement("p");
  let copyrightYear = new Date().getFullYear();
  copyright.innerText = copyrightYear + " Yazılım Şube Müdürlüğü";
  document.getElementsByTagName("footer")[0].appendChild(copyright);
}

//BORDRO
function tableToPDF(elem) {
  var sTable = elem.innerHTML;

  var style = "<style>";
  style = style + "table {width: 100%;font: 17px Calibri;}";
  style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
  style = style + "padding: 2px 3px;text-align: center;}";
  style = style + "</style>";

  // CREATE A WINDOW OBJECT.
  var win = window.open('', '', 'fullscreen=yes');
  win.document.write('<html><head>');
  win.document.write('<title>Bordro</title>');   // <title> FOR PDF HEADER.
  win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
  win.document.write('</head>');
  win.document.write('<body>');
  win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
  win.document.write('</body></html>');

  win.document.close(); 	// CLOSE THE CURRENT WINDOW.

  //win.print();    // PRINT THE CONTENTS.
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