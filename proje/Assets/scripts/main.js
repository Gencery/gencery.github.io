function toggleMenu(hamMenu) {

  let state = hamMenu.getAttribute("data-state");
  //
  let hamMenuChildren = hamMenu.children;
  let hamMenuFirstDash = hamMenuChildren[0];
  let hamMenuSecondDash = hamMenuChildren[1];
  let hamMenuThirdDash = hamMenuChildren[2];
  let nav = document.querySelectorAll("nav")[0];


  //toggle hamMenu Classlists
  "-rotate-45 translate-x-[5px] translate-y-[8px]".split(" ").forEach(className => hamMenuFirstDash.classList.toggle(className));
  "opacity-0".split(" ").forEach(className => hamMenuSecondDash.classList.toggle(className));
  "rotate-45 translate-x-[5px] -translate-y-[12px]".split(" ").forEach(className => hamMenuThirdDash.classList.toggle(className));

  //toggle Nav menu classes
  if (state == "off") {
    nav.classList.remove("max-h-[0px]");
    nav.classList.add("max-h-[9000px]");
  }
  else {
    nav.classList.remove("max-h-[9000px]");
    nav.classList.add("max-h-[0px]");
  }

  //
  state == "off" ? hamMenu.setAttribute("data-state", "on") : hamMenu.setAttribute("data-state", "off");
}