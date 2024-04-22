//metaveri reddet
setTimeout(() => {
  for (let metaveriReddetButton of document.querySelectorAll('[data-metaVeriReddetId]')) {
    metaveriReddetButton.addEventListener("click", () => {

      let metaVeriId = metaveriReddetButton.getAttribute("data-metaVeriReddetId");

      let metaVeriReddetFormPopup = document.getElementById("metaVeriReddetFormPopup");

      let metaVeriReddetFormIdInput = metaVeriReddetFormPopup.getElementsByClassName("metaVeriIdInput")[0];

      metaVeriReddetFormIdInput.value = metaVeriId;
      openPopUp(metaVeriReddetFormPopup);
    })
  }
}, 1000)
