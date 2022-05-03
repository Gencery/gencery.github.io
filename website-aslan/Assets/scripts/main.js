//fetch header
fetch("./header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementsByTagName("header")[0].innerHTML = data;

    let btns = document
      .getElementsByTagName("nav")[0]
      .getElementsByTagName("span");
    for (let btn of btns) {
      btn.setAttribute("tabIndex", 0);
      //focus display li items
      btn.addEventListener("focus", () => {
        btn.nextElementSibling.style.visibility = "visible";
        let lis = btn.nextElementSibling.children;
        for (let li of lis) {
          li.style.height = "40px";
        }
      });
      //blur hide li items
      btn.addEventListener("blur", () => {
        let lis = btn.nextElementSibling.children;
        for (let li of lis) {
          li.style.height = "0px";
        }
        setTimeout(
          () => (btn.nextElementSibling.style.visibility = "hidden"),
          400
        );
      });
    }
  });
//fetch footer
fetch("./footer.html")
  .then((res) => res.text())
  .then(
    (data) => (document.getElementsByTagName("footer")[0].innerHTML = data)
  );
