//fetch header
fetch("./header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementsByTagName("header")[0].innerHTML = data;

    let openedItem = null;

    let menuitems = document.getElementsByClassName("menu-item");
    for (let menuitem of menuitems) {
      menuitem.addEventListener("click", function toggleDropDown(event) {
        let next = this.nextElementSibling;
        event.stopPropagation();
        if (window.getComputedStyle(next).visibility == "hidden") {
          next.style.visibility = "visible";
          openedItem = next;
        } else {
          next.style.visibility = "hidden";
          openedItem = null;
        }
      });
    }

    let items = document.getElementsByTagName("*");
    for (let item of items)
      if (!item.classList.contains("menu-item"))
        item.addEventListener("click", closeOpen);
    function closeOpen() {
      if (openedItem) {
        openedItem.style.visibility = "hidden";
        openedItem = null;
      }
    }
  });
//fetch footer
fetch("./footer.html")
  .then((res) => res.text())
  .then(
    (data) => (document.getElementsByTagName("footer")[0].innerHTML = data)
  );
