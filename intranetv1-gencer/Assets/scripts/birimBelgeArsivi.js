let buttons = document
  .getElementsByClassName("button-group-g")[0]
  .getElementsByTagName("button");

let contents = document.getElementsByClassName("bba-content-firstChild");

//display only the first tab on load
for (let content of contents) content.style.display = "none";
contents[0].style.display = "block";
buttons[0].classList.add("button-active");

function bbaToggleDisplay(btn, elem) {
  document.getElementsByClassName("button-active")[0].classList.remove("button-active");
  btn.classList.add("button-active");
  for (let content of contents) content.style.display = "none";
  elem.style.display = "block";
}

//prevent default for top button group
//Genelgeler, Yönerge..., Bilgi Güv, Enerji Yön, Diger Belgeler
{
  let tabButtons = document.getElementsByClassName("button-group-g")[0].children;
  for (let tabButton of tabButtons)
    tabButton.addEventListener("click", function (event) {
      event.preventDefault();
    });
}