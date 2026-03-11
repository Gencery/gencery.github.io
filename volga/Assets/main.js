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
          <button class="pill pill-red" onclick="console.log('red')">ACTING</button>
          <button class="pill pill-blue" onclick="console.log('blue')">SOFTWARE</button>
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
  mainNode.classList.add("op-0");
  mainNode.innerHTML = pages[currentPage].content;
  mainNode.classList.remove("op-0");
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