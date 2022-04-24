//fetch header
fetch("./header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementsByTagName("header")[0].innerHTML = data;
  });

//Drop down menu
