let gTabButtonsParent = document.getElementsByClassName("button-group-g")[0];
let gTabButtons = gTabButtonsParent.children;

let contents = document.getElementsByClassName("tabContents")[0].children;

let currentTab = 0;
for (let i = 0; i < gTabButtons.length; i++)
  gTabButtons[i].addEventListener("click", () => toggleTabs(i));

//display only the first tab on load

for (let child of contents) child.style.display = "none";
contents[0].style.display = "block";
gTabButtons[0].classList.add("button-active");

function toggleTabs(index) {
  //active - passive button
  gTabButtonsParent
    .getElementsByClassName("button-active")[0]
    .classList.remove("button-active");
  gTabButtons[index].classList.add("button-active");

  //display hide content selected
  for (let i = 0; i < contents.length; i++) contents[i].style.display = "none";
  contents[index].style.display = "block";
  //update current tab
  currentTab = index;

  //İleri -> Gönder
  let fwdBtn =
    document.getElementsByClassName("fwd-bwd-buttons")[0].children[1];

  if (currentTab == 4) {
    fwdBtn.innerText = "Gönder";
    fwdBtn.addEventListener("click", sendForm);
    bringSummary();
  } else {
    fwdBtn.innerText = "İleri";
    fwdBtn.removeEventListener("click", sendForm);
  }
}

let bwdBtn = document.getElementsByClassName("fwd-bwd-buttons")[0].children[0];
let fwdBtn = document.getElementsByClassName("fwd-bwd-buttons")[0].children[1];

function fwdTab() {
  if (isFormValid(currentTab)) {
    if (currentTab < contents.length - 1) toggleTabs(currentTab + 1);
  }
}
function bwdTab() {
  if (currentTab > 0) toggleTabs(currentTab - 1);
}

function isFormValid(tabNumber) {
  let tabContents = document.getElementsByClassName("tabContents")[0].children;
  //tabNumber = 0 -> Duyuruyu isteyen
  if (tabNumber == 0) {
    let counter = 0;
    if (tabContents[0].children[0].children[0].value == "Birim")
      alert("Birim giriniz!");
    else counter++;
    if (tabContents[0].children[0].children[1].value == "")
      alert("Duyuru Yetkilisi giriniz!");
    else counter++;
    if (tabContents[0].children[0].children[2].value.length != 4)
      alert("4 haneli dahili telefon hattı giriniz!");
    else counter++;
    if (counter == 3) {
      gTabButtons[tabNumber + 1].disabled = false;
      return true;
    } else {
      gTabButtons[tabNumber + 1].disabled = true;
      return false;
    }
    //tabNumber = 1 -> Duyuru özeti
  } else if (tabNumber == 1) {
    let counter = 0;

    if (tabContents[1].children[0].value == "")
      alert("Duyuru başlığı giriniz!");
    else counter++;

    let ckBodyP =
      document.getElementById("cke_1_contents").children[1].contentWindow
        .document.body;
    if (ckBodyP.innerText.length < 50 || ckBodyP.innerText.length > 700)
      alert(
        "Duyuru özeti 50 ile 700 karakter arasında olmalıdır. Karakter sayısı: " +
        (ckBodyP.innerText.length - 1)
      );
    else counter++;

    if (counter == 2) {
      gTabButtons[tabNumber + 1].disabled = false;
      return true;
    } else {
      gTabButtons[tabNumber + 1].disabled = true;
      return false;
    }
    //tabnumber = 2 -> duyuru detayı - kural yok
  } else if (tabNumber == 2) {
    gTabButtons[tabNumber + 1].disabled = false;

    return true;
    //tabNumber = 3 -> Yayınlanma Süresi
  } else if (tabNumber == 3) {
    if (
      tabContents[3].children[1].children[0].value != "" &&
      tabContents[3].children[1].children[1].value != ""
    ) {
      gTabButtons[tabNumber + 1].disabled = false;

      return true;
    } else {
      gTabButtons[tabNumber + 1].disabled = true;
      alert("Duyuru Yayınlanma Başlangıç ve Bitişi giriniz!");
      return false;
    }
  }
}

let cloneIndex = 0;

function dtfFileUpload(x) {
  let clonedInput = x.cloneNode(false);
  document.getElementById("dtf-inputs").appendChild(clonedInput);
  clonedInput.setAttribute("id", "cloneId" + cloneIndex);

  clonedInput.setAttribute("class", "clone");

  let row = document.createElement("tr");
  row.setAttribute("id", "row" + cloneIndex);

  let dosyaAdi = document.createElement("td");
  dosyaAdi.innerText = clonedInput.files[0].name + "";
  row.appendChild(dosyaAdi);

  let dosyaBoyutu = document.createElement("td");
  dosyaBoyutu.innerText =
    (clonedInput.files[0].size / 1024 + "").slice(0, 5) + " KB";
  row.appendChild(dosyaBoyutu);

  let dosyaSil = document.createElement("td");
  dosyaSil.innerHTML = "<img src='./Assets/img/sil.svg'/>";
  dosyaSil.setAttribute("id", "dsil" + cloneIndex);

  dosyaSil.addEventListener("click", function () {
    document.getElementById("cloneId" + this.id.slice(4)).remove();
    this.parentElement.remove();
  });
  row.appendChild(dosyaSil);

  let table = document.getElementById("dtfUploadFileList").children[0];
  table.appendChild(row);

  cloneIndex++;
  for (let x of document.getElementsByClassName("clone"))
    console.log(x.files[0].name);
}

function checkValidBeforeSent(x, e) {
  if (currentTab != 4) {
    return;
  }
  if (x != null)
    x.addEventListener("click", e.preventDefault());
  let result = false;
  for (let i = 0; i < contents.length - 1; i++) {
    result = isFormValid(i);
    if (!result) return;
  }
  return result;
}

function bringSummary() {
  //DUYURU İSTEYEN
  //birim
  document.getElementById("dtfsonuc1Birim").innerText =
    document.getElementById("dtf1Birim").value;
  //Yetkili
  document.getElementById("dtfsonuc1Yetkili").innerHTML =
    document.getElementById("dtf1Yetkili").value;
  //Telefon
  document.getElementById("dtfsonuc1Tel").innerText =
    document.getElementById("dtf1Tel").value;
  //Notlar
  document.getElementById("dtfsonuc1Notlar").innerText =
    document.getElementById("dtf1Notlar").value;

  //DUYURU ÖZETİ
  //Başlık
  document.getElementById("dtfsonuc2Baslik").innerText =
    document.getElementById("dtf2Baslik").value;

  //Özet
  document.getElementById("dtfsonuc2ozet").innerHTML =
    document.getElementById(
      "cke_1_contents"
    ).children[1].contentWindow.document.body.innerHTML;

  //DUYURU DETAYI
  document.getElementById("dtfsonuc3detay").innerHTML =
    document.getElementById(
      "cke_2_contents"
    ).children[1].contentWindow.document.body.innerHTML;
  //YAYINLANMA SÜRESİ
  document.getElementById("dtfsonuc4baslangic").innerText =
    document.getElementById("dtf4baslangic").value;
  document.getElementById("dtfsonuc4bitis").innerText =
    document.getElementById("dtf4bitis").value;
}

function sendForm() {
  if (checkValidBeforeSent(null, null) && (currentTab == 4))
    return document.getElementById("gonder2").click();
}
