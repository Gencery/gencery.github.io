//Nihai veri ise başlangıç bitiş
let veriTarihAraligiInputGroup = document.getElementById("veriTarihAraligi");

$('#veriGuncellemeSikligi').on('select2:select', function (e) {
  if (e.target.value == "12") {
    veriTarihAraligiInputGroup.classList.remove("hide");
    veriTarihAraligiInputGroup.getElementsByTagName("input")[0].setAttribute("required", "");
  }
  else {
    veriTarihAraligiInputGroup.classList.add("hide");
    veriTarihAraligiInputGroup.getElementsByTagName("input")[0].removeAttribute("required");
  }
});

//Bakımcı yüklenici ise input ile isim iste
let yukleniciAdiInput = document.getElementById("yukleniciAdiInput");

$('#bakimciSelect').on('select2:select', function (e) {
  if (e.target.value == "-1") {
    yukleniciAdiInput.classList.remove("hide");
    yukleniciAdiInput.setAttribute("required", "");
  }
  else {
    yukleniciAdiInput.classList.add("hide");
    yukleniciAdiInput.removeAttribute("required");
  }
});