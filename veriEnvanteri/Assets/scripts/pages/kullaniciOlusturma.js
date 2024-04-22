let kurumListesiSelect = document.getElementById("kurumListesi");


function getSelectedKurumMail() {
  return kurumListesiSelect.options[kurumListesiSelect.selectedIndex].getAttribute("data-email");
}

function getBeforeAt(str) {
  let indexOfAt = str.indexOf("@");
  return str.slice(0, indexOfAt);
}

let kullaniciMailInput = document.getElementById("kullaniciMail");

kullaniciMailInput.addEventListener("keyup", (e) => {
  console.log(e);
  if (getSelectedKurumMail() == null) {
    kullaniciMailInput.value = "";
    alert("Kurum Seçiniz!")
    return;
  }

  if (e.key == "Backspace") {
    if (getBeforeAt(kullaniciMailInput.value).length == 0) {
      return;
    }
    kullaniciMailInput.value = getBeforeAt(kullaniciMailInput.value).slice(0, -1) + "@" + getSelectedKurumMail();

  }
  else if (e.key.length == 1) {
    if (kullaniciMailInput.value == "") {
      kullaniciMailInput.value = "@" + getSelectedKurumMail();
    }
    //console.log(getBeforeAt(kullaniciMailInput.value), e.key, getSelectedKurumMail());
    kullaniciMailInput.value = getBeforeAt(kullaniciMailInput.value) + e.key + "@" + getSelectedKurumMail();
  }
})



$('#kurumListesi').on("select2:select", function (e) {
  if (kullaniciMailInput.value != "") {
    kullaniciMailInput.value = getBeforeAt(kullaniciMailInput.value) + "@" + getSelectedKurumMail();
  }
});