async function importResources() {
  let data = fetch("./Assets/volga.json");
  let travoltaVolga = fetch("./Assets/img/travoltaVolga.jpg")
  Promise.all([data, travoltaVolga]).then(responses => responses.forEach((res, i) => {
    if (i == 1) {

      document.getElementsByTagName("img")[0].setAttribute("src", res.blob())
    }
  }));
}

importResources();

let pages = {
  home: {
    content: /*html*/`
      <div class="home">
        <div class="imgContainer">
          <img src="./Assets/img/bondVolga2.jpg" alt="">
        </div>
        <nav>
          <a href="?page=experience">Experience</a>
          <a href="?page=education">Education</a>
          <a href="?page=contact">Contact</a>
        </nav>
      </div>
    `
  },
  experience: {
    content: /*html*/`
      <div class="experience">
        <div class="imgContainer">
          <img src="./Assets/img/morpheusVolga.png" alt="">
          <a href="?page=acting" class="pill pill-red"></a>
          <a href="?page=software" class="pill pill-blue"></a>
        </div>
        <p class="prompt">
          You take the blue pill, you learn about my <span class="blue">Software</span> experience. You take the red pill,
          you stay in the Wonderland, and see my <span class="red">Acting</span> experience!
          <br />
          <br />
          (click on a pill to choose)
        </p>
      </div>
    `
  },
  acting: {
    content: /*html*/`
      <div class="acting">

      </div>
    `
  },
  software: {
    content: /*html*/`
      
    `
  }
}


function router() {
  let locationParams = location.search.slice(1).split("&").map(item => item.split("="));
  //
  let locationParamsObj = {};
  //
  for (let param of locationParams) {
    locationParamsObj[param[0]] = param[1]
  }

  let currentPage = locationParamsObj.page;

  if (currentPage == undefined) {
    currentPage = "home"
  }
  if (!pages[currentPage]) {
    currentPage = "home"
  }
  let mainNode = document.getElementsByTagName("main")[0];
  //
  document.body.classList.add("disappear");

  setTimeout(() => {
    mainNode.innerHTML = pages[currentPage].content;
    document.body.classList.remove("disappear");
  }, 500)
}

document.body.addEventListener("click", e => {
  if (e.target.tagName == "A") {
    e.preventDefault();
    history.pushState({}, "", e.target.href);
    router();
  }
})

window.addEventListener("popstate", () => {
  router();
})

document.addEventListener("DOMContentLoaded", router)