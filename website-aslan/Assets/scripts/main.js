//fetch header
fetch("./header.html").then(res => res.text()).then(data => {
  document.getElementsByTagName("header")[0].innerHTML = data;

  let menuitems = document.getElementsByClassName("menu-item");
  for(let menuitem of menuitems)
    menuitem.addEventListener("click", ()=>menuitem.nextElementSibling.style.visibility = 'visible' );
});
//fetch footer
fetch("./footer.html").then(res => res.text()).then(data => document.getElementsByTagName("footer")[0].innerHTML = data);

