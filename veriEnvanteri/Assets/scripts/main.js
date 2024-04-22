let months = [
  {
    monthName: "Ocak",
    monthDays: 31,
  },
  {
    monthName: "Şubat",
    monthDays: new Date().getFullYear % 4 == 0 ? 29 : 28,
  },
  {
    monthName: "Mart",
    monthDays: 31,
  },
  {
    monthName: "Nisan",
    monthDays: 30,
  },
  {
    monthName: "Mayıs",
    monthDays: 31,
  },
  {
    monthName: "Haziran",
    monthDays: 30,
  },
  {
    monthName: "Temmuz",
    monthDays: 31,
  },
  {
    monthName: "Ağustos",
    monthDays: 31,
  },
  {
    monthName: "Eylül",
    monthDays: 30,
  },
  {
    monthName: "Ekim",
    monthDays: 31,
  },
  {
    monthName: "Kasım",
    monthDays: 30,
  },
  {
    monthName: "Aralık",
    monthDays: 31,
  },
];

let days = {
  1: "Pazartesi",
  2: "Salı",
  3: "Çarşamba",
  4: "Perşembe",
  5: "Cuma",
  6: "Cumartesi",
  7: "Pazar",
};

//fetch header
fetch("./header.html")
  .then(res => res.text())
  .then(data => document.getElementsByTagName("header")[0].innerHTML = data);
//fetch footer
fetch("./footer.html")
  .then(res => res.text())
  .then(data => document.getElementsByTagName("footer")[0].innerHTML = data);


//LOADING SCREEN
function createLoadingScreen() {
  //
  let loader = document.createElement("div");
  loader.setAttribute("id", "loaderContainer");
  //
  let innerLoader = document.createElement("div");
  loader.appendChild(innerLoader);
  innerLoader.classList.add("loader");
  //LOGO
  let logoLoader = document.createElement("img");
  logoLoader.setAttribute("src", "./Assets/img/loader3.png");
  loader.appendChild(logoLoader);
  logoLoader.classList.add("logoLoader");

  document.body.getElementsByTagName("main")[0].appendChild(loader);
};
createLoadingScreen();

function toggleLoadingScreenDisplay() {
  let loadingScreen = document.getElementById("loaderContainer");
  if (window.getComputedStyle(loadingScreen).visibility == "hidden") {
    loadingScreen.style.visibility = "visible";
  } else {
    loadingScreen.style.visibility = "hidden";
  }
}

function toPDF(elem, pageAlign) {
  var elem = elem.innerHTML;
  var style = `
  *{
    box-sizing: border-box;
  }
  .card-std2{
    width: 33%;
  }
  .card-container2{
    display: flex;
  }
  table{
    width: 99%;
    border-collapse: collapse;
    margin: 10px;
  }
  table * {
    text-align: center;
    padding: 3px;
  }
  th, td {
    border: 1px solid black;
  }
  .p-bold{
    font-weight: bold;
  }
  @media print {
    .noPrint {
      display: none;
    }
  }`;

  if (pageAlign == "yatay") {
    style += "@page { size: landscape; }";
  }

  style = "<style>" + style + "</style>";

  // CREATE A WINDOW OBJECT.
  var win = window.open("", "", "");
  win.document.write("<html><head>");
  //win.document.write('<title>Bordro</title>');   // <title> FOR PDF HEADER.
  win.document.write(style);
  win.document.write("</head>");
  win.document.write("<body>");
  win.document.write(elem); // THE TABLE CONTENTS INSIDE THE BODY TAG.
  win.document.write("</body></html>");

  win.document.close(); // CLOSE THE CURRENT WINDOW.

  win.print(); // PRINT THE CONTENTS.
}

function msgBox(type, msg, secMsg) {

  //bildirim box
  let bildirimBox = document.createElement("div");
  bildirimBox.classList.add("bildirimBox");

  //bildirim box inner
  let bildirimBoxInner = document.createElement("div");
  bildirimBoxInner.classList.add("bildirimBox-inner");

  type && bildirimBoxInner.classList.add(type);

  bildirimBox.append(bildirimBoxInner);

  //close button
  let closeButton = document.createElement("button");
  closeButton.classList.add("closeButton");
  closeButton.innerHTML = "&#10006;";
  closeButton.addEventListener("click", () => {
    bildirimBox.remove();
  });
  bildirimBoxInner.append(closeButton);

  //success, warning, fail pictures
  let infoTypePic = document.createElement("img");
  let infoTypePicSrc = "/Assets/img/infoPics/";

  if (type == "success") {
    infoTypePicSrc += "success.svg";
  }
  else if (type == "warning") {
    infoTypePicSrc += "warning.svg";
  }
  else if (type == "fail") {
    infoTypePicSrc += "fail.svg";
  }
  else {
    infoTypePicSrc += "info.svg";
  }

  infoTypePic.setAttribute("src", infoTypePicSrc);
  bildirimBoxInner.append(infoTypePic);


  // let bildirimBoxExit = document.createElement("div");
  // bildirimBoxInner.setAttribute("class", "bildirimBox-exit");
  // bildirimBox.append(bildirimBoxExit);

  let bildirimMsg = document.createElement("p");
  bildirimMsg.classList.add("bildirimMsg");
  msg && (bildirimMsg.innerText = msg);
  bildirimBoxInner.append(bildirimMsg);

  let bildirimMsgSec = document.createElement("p");
  bildirimMsgSec.classList.add("bildirimMsgSec");
  secMsg && (bildirimMsgSec.innerText = secMsg);
  bildirimBoxInner.append(bildirimMsgSec);

  document.body.append(bildirimBox);
}

function msgBoxConfirm(event, msg) {
  event.preventDefault();
  //bildirim box
  let bildirimBox = document.createElement("div");
  bildirimBox.classList.add("bildirimBox");

  //bildirim box inner
  let bildirimBoxInner = document.createElement("div");
  bildirimBoxInner.classList.add("bildirimBox-inner");


  bildirimBox.append(bildirimBoxInner);

  //close button
  let closeButton = document.createElement("button");
  closeButton.classList.add("closeButton");
  closeButton.innerHTML = "&#10006;";
  closeButton.classList.add("clr2")
  closeButton.addEventListener("click", () => {
    bildirimBox.remove();
  });
  bildirimBoxInner.append(closeButton);

  //info icon
  let infoTypePic = document.createElement("img");
  let infoTypePicSrc = "/Assets/img/infoPics/info.svg";
  infoTypePic.setAttribute("src", infoTypePicSrc);
  bildirimBoxInner.append(infoTypePic);

  //bildirim mesajı
  let bildirimMsg = document.createElement("p");
  bildirimMsg.classList.add("clr2")
  bildirimMsg.classList.add("bildirimMsg");
  msg && (bildirimMsg.innerText = msg);
  bildirimBoxInner.append(bildirimMsg);

  //evet - hayır button
  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("msgBoxButtons");

  //deny button
  let denyButton = document.createElement("button");
  denyButton.innerText = "Hayır";
  buttonContainer.append(denyButton);
  denyButton.classList.add("btn-1");
  denyButton.addEventListener("click", () => {
    bildirimBox.remove();
  })

  //confirm button
  let confirmButton = document.createElement("button");
  confirmButton.innerText = "Evet";
  confirmButton.classList.add("btn-2");
  confirmButton.addEventListener("click", () => {
    if (event.target.closest("a")) {
      window.location = event.target.closest("a").getAttribute("href");
    }
    else {
      event.target.closest("form").querySelector("[type='submit']").click();
    }
  })
  buttonContainer.append(confirmButton);


  //
  bildirimBoxInner.append(buttonContainer);
  //
  document.body.append(bildirimBox);
}


function resetFormsInside(elem) {
  let forms = elem.getElementsByTagName("form");
  for (let form of forms) form.reset();
}


function gFileInput(elem, size) {
  let dosyaSayisi = 0;
  //button
  if (elem.innerText != "") {
    let container = elem.nextElementSibling.nextElementSibling;

    if (elem.classList.contains("button-danger")) {
      elem.innerText =
        elem.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
      while (container.children.length) container.children[0].remove();
      elem.classList.replace("button-danger", "button-regular");
    } else {
      elem.nextElementSibling.click();
    }
  }
  //input
  else {
    if (elem.files.length > size)
      alert("En fazla " + size + " dosya yüklenebilir");
    let container = elem.nextElementSibling;
    elem.previousElementSibling.setAttribute("class", "button-danger");
    elem.nextElementSibling.nextElementSibling.innerText =
      elem.previousElementSibling.innerText;

    let src;
    if (elem.previousElementSibling.innerText.indexOf("Dosya") > -1) src = true;

    elem.previousElementSibling.innerText = "İptal";
    for (let file of elem.files) {
      if (dosyaSayisi == size) return;

      //resimleri card yap oluştur
      let card = document.createElement("img");
      card.setAttribute("title", file.name);
      if (src) src = "/Assets/img/document_generic.png";
      else src = URL.createObjectURL(file);
      card.setAttribute("src", src);

      card.setAttribute("class", "inputCard");
      container.append(card);

      dosyaSayisi++;
    }
  }
}

function getDateTimeLocal(offsetHours) {
  let now = new Date().getTime() + offsetHours * 60 * 60000;
  return new Date(now).toISOString().slice(0, 16);
}

//gPaginationFS
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementsByClassName("gPaginationFS").length) {

    function indexOfElem(list, elem) {
      return [...list].indexOf(elem);
    }


    toggleLoadingScreenDisplay();
    setTimeout(() => {
      for (let gPagination of document.getElementsByClassName(
        "gPaginationFS"
      )) {

        //if empty, quit
        if (gPagination.children.length == 0) {
          toggleLoadingScreenDisplay();
          return;
        }


        let data = null;
        let dataContainer = document.createElement("div");
        let currentPage = 1;
        let itemsToRender = null;
        let pageControlDiv = null;
        let noOfPages = null;
        let filterDiv = null;
        let paginationType = "";
        let prevDisplay = null;
        //data



        //move items to data container
        dataContainer.classList.add("dataContainer");
        dataContainer.innerHTML = gPagination.innerHTML;
        gPagination.innerHTML = "";
        filterDiv = document.createElement("div");
        filterDiv.classList.add("filterDiv");

        gPagination.append(filterDiv);
        gPagination.append(dataContainer);

        //if data is table
        if (gPagination.getElementsByTagName("table").length == 1) {
          data = dataContainer.getElementsByTagName("tbody")[0].children;
          for (let item of data) {
            for (let td of item.children) {
              td.setAttribute("data-filter", "");
            }
          }
          paginationType = "table";
        }
        //if data is some cards (or tables)
        else {
          data = dataContainer.children;
          paginationType = "cards";
        }
        prevDisplay = getComputedStyle(data[0]).display;

        //initially, all are valid
        for (let item of data) {
          item.setAttribute("data-valid", "");
          for (let child of item.querySelectorAll("[data-filter]")) {
            child.setAttribute("data-childValid", "");
          }
        }

        //render page
        function renderPage(pageNo) {
          if (currentPage == pageNo && pageNo != 1) {
            return;
          }
          itemsToRender = dataContainer.querySelectorAll("[data-valid]");

          let noOfItemsToRender = itemsToRender.length;
          let itemsPerPage = parseInt(
            gPagination.getAttribute("data-itemsPerPage")
          );
          if (!itemsPerPage) {
            //default 10
            itemsPerPage = 10;
          }
          noOfPages = Math.floor(noOfItemsToRender / itemsPerPage) + 1;
          //render valid data wrt page number
          let indexOfFirstItemToRender = (pageNo - 1) * itemsPerPage;
          let indexOfLastItemToRender = indexOfFirstItemToRender + itemsPerPage;

          for (let item of data) {
            //item.classList.remove("gPagination-show");
            item.style.display = "none";
          }

          for (
            let i = indexOfFirstItemToRender;
            i < indexOfLastItemToRender;
            i++
          ) {
            if (itemsToRender[i]) {
              //itemsToRender[i].classList.add("gPagination-show");
              itemsToRender[i].style.display = prevDisplay;
            } else {
              break;
            }
          }
          currentPage = pageNo;
          updateButtons(currentPage, noOfPages);
        }

        //filter data
        {
          let filterables = null;

          if (paginationType == "table") {
            filterables = dataContainer
              .getElementsByTagName("thead")[0]
              .querySelectorAll("[data-filter]");
          } else if (paginationType == "cards") {
            filterables = data[0].querySelectorAll("[data-filter]");
          }

          for (let item of filterables) {
            let index = indexOfElem(filterables, item);

            let filterInputContainer = document.createElement("div");
            filterInputContainer.classList.add("inputContainer");
            let filterInput = document.createElement("input");

            if (filterables[index].getAttribute("data-filter") == "hidden") {
              filterInputContainer.style.display = "none";
            }

            if (filterables[index].getAttribute("data-filter") != "") {
              filterInput.setAttribute(
                "placeholder",
                filterables[index].getAttribute("data-filter")
              );
            } else {
              filterInput.setAttribute(
                "placeholder",
                filterables[index].innerText + "..."
              );
            }
            //
            filterInput.addEventListener("input", () => {
              for (let item of data) {
                let toFilter = null;

                if (paginationType == "table") {
                  toFilter = item.children[index];
                } else if (paginationType == "cards") {
                  toFilter = item.querySelectorAll("[data-filter]")[index];
                }

                if (
                  toFilter.innerText
                    .toLocaleLowerCase("TR")
                    .indexOf(filterInput.value.toLocaleLowerCase("TR")) > -1
                ) {
                  toFilter.setAttribute("data-childValid", "");
                } else {
                  toFilter.removeAttribute("data-childValid");
                }
                let countValidChildren = 0;

                for (let child of item.querySelectorAll("[data-filter]")) {
                  if (child.hasAttribute("data-childValid")) {
                    countValidChildren++;
                  } else {
                    break;
                  }
                }
                //
                if (
                  countValidChildren ==
                  item.querySelectorAll("[data-filter]").length
                ) {
                  item.setAttribute("data-valid", "");
                } else {
                  item.removeAttribute("data-valid", "");
                }
              }

              renderPage(1);
            });
            filterInputContainer.append(filterInput);
            filterDiv.append(filterInputContainer);
          }
        }

        //sort data
        {
          let sortables = null;

          if (paginationType == "table") {
            sortables = dataContainer
              .getElementsByTagName("thead")[0]
              .querySelectorAll("[data-filter]");
          } else if (paginationType == "cards") {
            sortables = data[0].querySelectorAll("[data-filter]");
          }

          for (let item of sortables) {
            let index = indexOfElem(sortables, item);
            let sortInput = document.createElement("span");

            //ascend
            let ascInput = document.createElement("button");
            ascInput.setAttribute("type", "button");
            ascInput.setAttribute("tabindex", -1);
            ascInput.innerHTML = "&#9650;";
            ascInput.setAttribute("title", "A - Z");

            ascInput.addEventListener("click", () => {
              let sortedData = [...data]
                .map((item) => item.querySelectorAll("[data-filter]")[index])
                .sort((a, b) =>
                  a.innerText
                    .trim()
                    .toLocaleLowerCase("TR")
                    .localeCompare(
                      b.innerText.trim().toLocaleLowerCase("TR"),
                      "TR"
                    )
                );

              let dataContainerInner;
              if (paginationType == "table") {
                dataContainerInner =
                  dataContainer.getElementsByTagName("tbody")[0];
                dataContainerInner.innerHTML = "";
              } else if (paginationType == "cards") {
                dataContainerInner = dataContainer;
                dataContainerInner.innerHTML = "";
              }
              sortedData
                .filter((item) => item.closest("[data-valid]"))
                .map((item) =>
                  dataContainerInner.append(item.closest("[data-valid]"))
                );

              renderPage(1);
            });

            //descend
            let dscInput = document.createElement("button");
            dscInput.setAttribute("type", "button");
            dscInput.setAttribute("tabindex", -1);
            dscInput.innerHTML = "&#9660;";
            dscInput.setAttribute("title", "Z - A");

            dscInput.addEventListener("click", () => {
              /*
              let sortedData = [...data].map(item => item.querySelectorAll("[data-filter]")[index]).sort((a, b) => ((a.innerText.trim().toLocaleLowerCase("TR")) < (b.innerText.trim().toLocaleLowerCase("TR"))));
              */

              let sortedData = [...data]
                .map((item) => item.querySelectorAll("[data-filter]")[index])
                .sort((b, a) =>
                  a.innerText
                    .trim()
                    .toLocaleLowerCase("TR")
                    .localeCompare(
                      b.innerText.trim().toLocaleLowerCase("TR"),
                      "TR"
                    )
                );

              let dataContainerInner;
              if (paginationType == "table") {
                dataContainerInner =
                  dataContainer.getElementsByTagName("tbody")[0];
                dataContainerInner.innerHTML = "";
              } else if (paginationType == "cards") {
                dataContainerInner = dataContainer;
                dataContainerInner.innerHTML = "";
              }

              dataContainerInner.innerHTML = "";
              sortedData
                .filter((item) => item.closest("[data-valid]"))
                .map((item) =>
                  dataContainerInner.append(item.closest("[data-valid]"))
                );
              renderPage(1);
            });

            sortInput.append(ascInput);
            sortInput.append(dscInput);

            gPagination
              .getElementsByClassName("filterDiv")[0]
              .children[index].append(sortInput);
          }
        }

        //page control && buttons container
        {
          pageControlDiv = document.createElement("div");
          pageControlDiv.classList.add("pagination-g");
          gPagination.append(pageControlDiv);

          //prev button
          let prevButton = document.createElement("button");
          prevButton.innerHTML = "❮";
          prevButton.classList.add("prevButton");
          prevButton.addEventListener("click", () => {
            renderPage(currentPage == 1 ? 1 : currentPage - 1);
          });

          //1st page button
          let firstButton = document.createElement("button");
          firstButton.innerText = "❮❮";
          firstButton.addEventListener("click", () => {
            renderPage(1);
          });

          //page select
          let pageSelect = document.createElement("select");
          pageSelect.classList.add("pageSelect");
          pageSelect.classList.add("page-selected");
          pageSelect.addEventListener("input", () => {
            renderPage(parseInt(pageSelect.value));
          });

          //last page button
          let lastButton = document.createElement("button");
          lastButton.innerText = data.length;
          lastButton.classList.add("lastButton");
          lastButton.addEventListener("click", () => {
            renderPage(noOfPages);
          });

          //next button
          let nextButton = document.createElement("button");
          nextButton.innerHTML = "❯";
          nextButton.classList.add("nextButton");
          nextButton.addEventListener("click", () => {
            renderPage(currentPage == noOfPages ? noOfPages : currentPage + 1);
          });
          //buttons in order
          pageControlDiv.append(firstButton);
          pageControlDiv.append(prevButton);
          pageControlDiv.append(pageSelect);
          pageControlDiv.append(nextButton);
          pageControlDiv.append(lastButton);
        }
        //update buttons
        function updateButtons(currentPage, noOfPages) {
          let pageSelect =
            pageControlDiv.getElementsByClassName("pageSelect")[0];
          pageSelect.innerHTML = "";

          let lastButton =
            pageControlDiv.getElementsByClassName("lastButton")[0];
          lastButton.innerText = noOfPages;
          lastButton.innerText = "❯❯";

          for (let i = 1; i <= noOfPages; i++) {
            let pageOption = document.createElement("option");
            pageOption.value = i;
            pageOption.innerText = i;
            pageSelect.append(pageOption);
          }
          pageSelect.value = currentPage;
        }
        renderPage(currentPage);
        toggleLoadingScreenDisplay();
      }
    }, 250);
  }
});



(function gTabs() {
  if (document.getElementsByClassName("gTabs")) {
    let gTabss = document.getElementsByClassName("gTabs");
    for (let gTabs of gTabss) {
      let btns = gTabs
        .getElementsByClassName("gTabs-buttons")[0]
        .getElementsByTagName("button");
      let contents = gTabs.getElementsByClassName("gTabs-content");
      let prevDisplay = window.getComputedStyle(contents[0]).display;
      for (let content of contents) {
        content.style.display = "none";
      }
      if (btns.length && contents.length) {
        for (let i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function (event) {
            event.preventDefault();

            for (let content of contents) {
              content.style.display = "none";
            }
            for (let btn of btns) {
              btn.classList.replace("button-active", "button-negative");
            }
            btns[i].classList.replace("button-negative", "button-active");
            contents[i].style.display = prevDisplay;
          });
        }
      }
      btns[0].click();
    }
  }
})();

function addPrefix(elem, str) {
  if (elem.value.slice(0, str.length) == str);
  else elem.value = str + elem.value;
}



function datalistCheck(event, elem) {
  let container = elem.closest("form");
  let gCombos = container.getElementsByClassName("gCombo");

  for (let gCombo of gCombos) {
    let optionsArr = [];
    let options = gCombo.children[1].children;
    let input = gCombo.children[0];

    for (let option of options) {
      optionsArr.push(option.innerText);
    }
    if (input.value != "" && optionsArr.indexOf(input.value) < 0) {
      event.preventDefault();
      input.value = "";
    }
  }
}

function fillYears(optionContainer, start, end) {
  if (!optionContainer.children.length) {
    let option;
    for (let i = start; i <= end; i++) {
      option = document.createElement("option");
      option.innerText = i;
      optionContainer.appendChild(option);
    }

    option = document.createElement("option");
    option.innerText = "Devam Ediyor";
    optionContainer.appendChild(option);
  }
}

function fillContainerOptions(container, file) {
  if (!container.children.length) {
    fetch(file)
      .then((res) => res.text())
      .then((data) => {
        container.innerHTML = data;
        addClickToComboOptions(
          container,
          container.previousElementSibling,
          container.nextElementSibling
        );
      });
  }
}



//Validate TC Kimlik No
function validateTcNo(tcNoStr, event) {
  if (tcNoStr.length != 11) {
    //TC Kimlik No 11 haneli olmalıdır!
    return false;
  } else if (tcNoStr[0] == "0") {
    //Geçersiz TC Kimlik No!"
    return false;
  } else {
    let tcNoStrArr = tcNoStr.split("");
    let tcNoIntArr = tcNoStrArr.map((x) => parseInt(x));

    let hane10 =
      ((tcNoIntArr[0] +
        tcNoIntArr[2] +
        tcNoIntArr[4] +
        tcNoIntArr[6] +
        tcNoIntArr[8]) *
        7 -
        (tcNoIntArr[1] + tcNoIntArr[3] + tcNoIntArr[5] + tcNoIntArr[7])) %
      10;

    let hane11 = 0;
    for (let i = 0; i < 10; i++) {
      hane11 += tcNoIntArr[i];
    }
    hane11 = hane11 % 10;

    if (hane10 != tcNoStr[9]) {
      //Geçersiz TC Kimlik No!
      return false;
    } else if (hane11 != tcNoStr[10]) {
      //Geçersiz TC Kimlik No!
      return false;
    }
  }
  return true;
}

(function loadPageScript() {
  //get page name
  let page = document.querySelector("[data-page]");

  if (page == null || page.getAttribute("data-page").trim() == "") {
    return;
  }
  else {
    page = page.getAttribute("data-page");
  }

  //create and load script tag with name of the current page
  let pageScript = document.createElement("script");
  pageScript.setAttribute("src", "/Assets/scripts/pages/" + page + ".js");
  pageScript.setAttribute("type", "module");
  //append script to body
  document.body.append(pageScript);

})();


//password sifreyi goster / gizle
{
  let passwordInputContainers = document.querySelectorAll(".passwordInput");
  for (let passwordInputContainer of passwordInputContainers) {

    let passwordInput = passwordInputContainer.querySelector("[type='password']");

    passwordInputContainer.getElementsByClassName("sifreyiGoster")[0]
      .addEventListener("click", () => {
        if (passwordInput.getAttribute("type") == "password") {
          passwordInput.setAttribute("type", "text");
        }
        else {
          passwordInput.setAttribute("type", "password");
        }
      })
  }
}

//input restriction
document.addEventListener("DOMContentLoaded", () => {
  //AD SOYAD
  let adSoyadInputs = document.querySelectorAll("[data-inputType='adSoyad']");

  for (let input of adSoyadInputs) {
    input.addEventListener("input", () => {
      input.value = input.value
        .replace(/[^A-Za-z çöğşüÇÖĞŞÜıİ]/g, "")
        .replace(/(\..*?)\..*/g, "$1");
    });
    input.addEventListener("focusout", () => {
      input.value = input.value.trim();
    });
  }
  //DATE
  let dateInputs = document.querySelectorAll("[type='date'], [type='month']");
  for (let input of dateInputs) {
    if (
      input.getAttribute("data-dateRangeMax") &&
      input.getAttribute("data-dateRangeMin")
    ) {
      let rangeMax = input.getAttribute("data-dateRangeMax");
      let rangeMin = input.getAttribute("data-dateRangeMin");
      let maxDate;
      let minDate;

      rangeMax = rangeMax.split(",");
      rangeMax = rangeMax.map((x) => parseInt(x));
      maxDate = dateToAttribute(new Date(), rangeMax);

      rangeMin = rangeMin.split(",");
      rangeMin = rangeMin.map((x) => parseInt(x));
      minDate = dateToAttribute(new Date(), rangeMin);

      input.setAttribute("min", minDate);
      input.setAttribute("max", maxDate);

      input.addEventListener("blur", () => {
        if (Date.parse(input.value) > Date.parse(maxDate)) {
          input.value = "";
          return;
        } else if (Date.parse(input.value) < Date.parse(minDate)) {
          input.value = "";
          return;
        }
      });
    }
    input.addEventListener("blur", () => {
      let inputYear = input.value.split("-")[0];
      if (inputYear.length > 4 || inputYear == "") {
        input.value = "";
        return;
      }
    });
  }
  //PHONE
  let telInputs = document.querySelectorAll("[data-inputType='tel']");
  for (let input of telInputs) {
    input.addEventListener("input", () => {
      if (input.value.length == parseInt(input.getAttribute("maxlength")) - 4) {
        input.value = input.value.slice(0, -1);
      }
      if (input.value[0] == 0) {
        input.value = "";
      }

      input.value = input.value
        .replace(/\D/g, "")
        .replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, "($1) $2 $3 $4");
    });
    //input.setAttribute("placeholder", "Cep No: (000) 000 00 00");
    input.setAttribute("maxlength", "15");
    input.setAttribute("minlength", "15");
    input.setAttribute("type", "tel");

    input.addEventListener("focusout", () => {
      if (input.value.length < parseInt(input.getAttribute("minlength"))) {
        input.value = "";
      }
      input.value = input.value.replaceAll(/\D/g, "");
    });
  }
  //NUMBER
  let numInputs = document.querySelectorAll("[data-inputType='num']");
  for (let input of numInputs) {
    input.addEventListener("input", () => {
      input.value = input.value
        .replace(/[^0-9]/g, "")
        .replace(/(\..*?)\..*/g, "$1");
    });
    //input.setAttribute("type", "number");
  }

  //URL
  let urlInputs = document.querySelectorAll("[data-inputType='url'");
  for (let input of urlInputs) {
    input.addEventListener("focusout", () => {
      let value = input.value;
      if (
        value.indexOf("http://") != 0 &&
        value.indexOf("https://") != 0 &&
        value != ""
      ) {
        input.value = "https://" + input.value;
      }
    });
    //input.setAttribute("pattern", "https?://.*")
    //input.setAttribute("type", "url");
  }
});



//şifremi unuttum sms
//oninput otomatik geçiş
{
  if (document.getElementsByClassName("smsAktivasyon").length) {
    //
    let smsAktivasyonlar = document.getElementsByClassName("smsAktivasyon");

    for (let smsAktivasyon of smsAktivasyonlar) {
      let smsInputs = smsAktivasyon.getElementsByClassName("smsInput");

      //hidden input tüm sms kodu için
      let smsTumKod = smsAktivasyon.getElementsByClassName("smsTumKod")[0];

      //tek karakterlik inputlar
      for (let smsInput of smsInputs) {
        smsInput.addEventListener("keyup", (event) => {
          if (event.key == "Backspace") {
            smsInput.previousElementSibling && smsInput.previousElementSibling.focus();
          }
          else if (
            smsInput.value != "" &&
            smsInput.value != " "
          ) {
            smsInput.nextElementSibling && smsInput.nextElementSibling.focus();
          }
          smsTumKod.value = createSmsCode(smsInputs);
        })
      }

      function createSmsCode(singleNumInputArr) {
        let resVal = "";
        for (let singleNumInput of singleNumInputArr) {
          resVal += singleNumInput.value;
        }
        return resVal;
      }
    }
  }
}

function smsCountDownEnded(smsAktivasyon) {

  msgBox("fail", "Kodu girmeniz için verilen süre doldu!", "Tekrar kod almak için 'Yeni Kod Gönder' butonuna tıklayınız.");


  let form = smsAktivasyon.getElementsByClassName("smsGonderForm")[0];
  form.remove();

  let gonderButton = document.getElementById("kodGonderClient");
  gonderButton.remove();
}


//gerisayım
{
  let countDowns = document.querySelectorAll("[data-countDown]");
  if (countDowns.length) {
    for (let countDown of countDowns) {
      let remainingTime = parseInt(countDown.getAttribute("data-countDown"));

      let countDownInterval = setInterval(() => {
        countDown.innerText = remainingTime;

        remainingTime ? remainingTime-- : (
          clearInterval(countDownInterval),
          countDown.click()

        )
      }, 1000)
    }
  }

}

//password validation
function isPasswordValid(inputVal) {
  return (
    inputVal.length >= 6
  )
}
//yeni sifre belirleme
{
  if (document.getElementsByClassName("yeniSifreBelirleme").length) {

    let yeniSifreBelirleme = document.getElementsByClassName("yeniSifreBelirleme")[0];

    let passwordInput1 = yeniSifreBelirleme.getElementsByClassName("passwordInput")[0].getElementsByTagName("input")[0];
    let passwordInput2 = yeniSifreBelirleme.getElementsByClassName("passwordInput")[1].getElementsByTagName("input")[0];
    let warnMsg = yeniSifreBelirleme.getElementsByClassName("warnArea")[0].getElementsByTagName("p")[0];

    let formHataMesaji = yeniSifreBelirleme.getElementsByClassName("formHataMesaji")[0];


    function yeniSifreBelirle(button) {
      if (isPasswordValid(passwordInput1.value) &&
        isPasswordValid(passwordInput2.value) && (passwordInput1.value == passwordInput2.value)) {
        //console.log(true)
        button.setAttribute("type", "submit");
        button.click();
      }
      else {
        msgBox("fail", "Girdiğiniz şifrelerin aynı olduğundan ve şifre kriterlerine uygun olduğundan emin olup tekrar deneyiniz.")
      }
    }
  }
}

//select2
$(document).ready(function () {
  let select2s = document.getElementsByClassName("select2");

  if (select2s.length) {

    $(".select2").select2({
      placeholder: "Seçiniz",
      language: {
        "noResults": function () {
          return "Sonuç bulunamadı.";
        }
      }
    });

  }
});

//select2 custom placeholder
document.addEventListener("DOMContentLoaded", () => {

  setTimeout(() => {

    let select2s = document.getElementsByClassName("select2");
    for (let select2 of select2s) {
      //select2 tag içinde placeholder varsa
      if (select2.getAttribute("placeholder")) {
        //select2 multiple seçimse
        if (select2.hasAttribute("multiple")) {
          select2.nextElementSibling.getElementsByTagName("textarea")[0].addEventListener("change", () => {
            select2.nextElementSibling.getElementsByTagName("textarea")[0].setAttribute("placeholder", select2.getAttribute("placeholder"));
          })

          select2.nextElementSibling.getElementsByTagName("textarea")[0].setAttribute("placeholder", select2.getAttribute("placeholder"));
        }
        else {
          select2.nextElementSibling.getElementsByClassName("select2-selection__placeholder")[0].innerText = select2.getAttribute("placeholder");
        }
      }


      // select2.getElementsByClassName("select2-selection__placeholder")[0].innerText = select2.getAttribute("placeholder");
    }
  }, 500)
})

//limit max characters in an element
document.addEventListener("DOMContentLoaded", () => {
  let maxCharItems = document.querySelectorAll("[data-maxChar]");
  for (let maxCharItem of maxCharItems) {
    if (maxCharItem.innerText.length > parseInt(maxCharItem.getAttribute("data-maxChar"))) {

      maxCharItem.innerText = "" + maxCharItem.innerText.slice(0, maxCharItem.getAttribute("data-maxChar")) + "...";
    }
  }
})




function openPopUp(gPopup) {
  if (gPopup.nodeName) {
    gPopup.style.display = "flex";
  }
  else {
    document.querySelector(gPopup).style.display = "flex";
  }
}

function closePopUp(gPopup) {
  gPopup.style.display = "none";
}

//gPopup
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementsByClassName("gPopup").length > 0) {
    for (let gPopup of document.getElementsByClassName("gPopup")) {

      //close popup gPopupExitArea
      gPopup.getElementsByClassName("gPopup-exit")[0].addEventListener("click", (event) => {
        closePopUp(event.target.closest(".gPopup"));
      })

      //close popup button cancel
      gPopup.getElementsByClassName("gPopup-closeButton")[0].addEventListener("click", (event) => {
        closePopUp(event.target.closest(".gPopup"));
      })
    }
  }
})