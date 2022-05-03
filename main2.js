//fetch header
fetch("./header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementsByTagName("header")[0].innerHTML = data;
  });

//Drop down menu
let displayMenu = () => {
  let btns = document.getElementsByClassName("menuItem");
  let prop = "max-height";
  for (let btn of btns) {
    btn.style.transition = prop + " 0.5s";
  }
  if (window.getComputedStyle(btns[0]).visibility == "visible")
    for (let btn of btns) {
      btn.style[prop] = "0px";
      btn.style.visibility = "hidden";
    }
  else
    for (let btn of btns) {
      btn.style.visibility = "visible";
      btn.style[prop] = "40px";
    }
};
