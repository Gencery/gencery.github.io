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
}
if (!document.getElementsByClassName("fwd-bwd-buttons")) {
  let bwdBtn = document.getElementsByClassName("fwd-bwd-buttons")[0].children[0];
  let fwdBtn = document.getElementsByClassName("fwd-bwd-buttons")[0].children[1];
}
function fwdTab() {
  if (currentTab < contents.length - 1) toggleTabs(currentTab + 1);
}
function bwdTab() {
  if (currentTab > 0) toggleTabs(currentTab - 1);
}
