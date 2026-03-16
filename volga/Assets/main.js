async function importResources() {
  //Fetching images
  let imagesMap = [
    {
      name: "bondVolga2",
      src: "./Assets/img/bondVolga2.jpg"
    },
    {
      name: "brokebackVolga",
      src: "./Assets/img/brokebackVolga.jpg"
    },
    {
      name: "morpheusVolga",
      src: "./Assets/img/morpheusVolga.png"
    }, {
      name: "home",
      src: "./Assets/img/home.png"
    }
  ]

  let responses = await Promise.all(imagesMap.map(async (image) => {

    try {

      return {
        res: await fetch(`${image.src}`),
        name: image.name
      }
    } catch (error) {
      console.error(error);
    }
  }));

  let responseCount = 0;

  let blobs = await Promise.all(responses.map(async (respObj, i) => {
    let blob = await respObj.res.blob();

    let percentageNum = (++responseCount / responses.length) * 100;
    let filled = document.getElementById("filled");
    let percentage = document.getElementById("percentage");
    //
    filled.style.width = percentageNum + "%";
    percentage.innerText = percentageNum.toFixed(1) + "%";
    //
    return {
      blob: blob,
      name: respObj.name
    }
  }));

  let urlObjs = blobs.map(blobObj => {
    return {
      url: URL.createObjectURL(blobObj.blob),
      name: blobObj.name
    }
  });

  let imgsObj = {};
  urlObjs.forEach(urlObj => imgsObj[urlObj.name] = { url: urlObj.url })

  //fetching json data
  let data = await fetch("./Assets/data.json").then(res => res.json());

  return { img: imgsObj, data: data };
}

function getPage(page) {
  let header = () => /*html*/`
    <header>
      Volga Can Kaya
      <br>
      <p>Actor & Software Producer</p>
    </header>
  `
  let footer = () => /*html*/`
    <footer>
      <a href="?page=home" class="navHome">
        <img src=${images.home.url} alt="">
      </a>
    </footer>
  `

  let pages = {
    home: {
      content: /*html*/`
      <main>
        <div class="home">
          <div class="imgContainer">
            <img src=${images.bondVolga2.url} alt="">
          </div>
          <nav>
            <a href="?page=experience">Experience</a>
            <a href="?page=education">Education</a>
            <a href="?page=contact">Contact</a>
          </nav>
        </div>
      </main>
    `
    },
    experience: {
      content: /*html*/`
      <div class="experience">
        <div class="imgContainer">
          <img src=${images.morpheusVolga.url} alt="">
          <a href="?page=acting" class="pill pill-red"></a>
          <a href="?page=software" class="pill pill-blue"></a>
        </div>
        <p class="prompt">
          You take the blue pill, you learn about my <span class="blue">Software</span> experience. You take the red pill,
          you stay in the Wonderland, and see my <span class="red">Acting</span> experience!
          <br />
          (click on a pill to choose)
        </p>
      </div>
    `
    },
    acting: {
      content: /*html*/`
      <div class="acting">
        ${data.experience.acting.reduce((acc, current) => acc + /*html*/`
          <div class="card">
            <div>
              <p>${current.name || ""}</p>
              <p>${current.role || ""}</p>
              <p>${current.timeline || ""}</p>
              <p>${current.Director || ""}</p>
              <p>${current.Company || ""}</p>
              <p>${current.Location || ""}</p>
            </div>
            ${current.logo ? /*html*/`<div class="logo">
              <img src=${current.logo} />
            </div>` : ""}
          </div>
        `, "")
        }
      </div>
    `
    },
    software: {
      content: /*html*/`
      
    `
    }
  }

  let fullPage = `
    ${header()}
    ${pages[page].content}
    ${footer()}
  `
  return fullPage;
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

  //
  document.body.classList.add("disappear");

  setTimeout(() => {
    document.body.innerHTML = getPage(currentPage);
    document.body.classList.remove("disappear");
  }, 200)
}

let images = null;
let data = null;

async function start() {

  let resources = await importResources();
  images = resources.img;
  data = resources.data;


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
  //document.addEventListener("DOMContentLoaded", router)
  router();
}

start()
