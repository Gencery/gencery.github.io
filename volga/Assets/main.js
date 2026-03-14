async function importResources() {

  let imagesMap = [
    {
      name: "bondVolga2",
      src: "img/bondVolga2.jpg"
    },
    {
      name: "brokebackVolga",
      src: "img/brokebackVolga.jpg"
    },
    {
      name: "morpheusVolga",
      src: "img/morpheusVolga.png"
    }
  ]
  let imgsCount = imagesMap.length;

  let responses = await Promise.all(imagesMap.map(async (image, i) => {
    try {
      document.getElementsByTagName("main")[0].innerHTML = `<span class="loading">${i + 1}/${imgsCount}</span>`;
      return {
        res: await fetch(`./Assets/${image.src}`),
        name: image.name
      }
    } catch (error) {
      console.error(error);
    }
  }));


  let blobs = await Promise.all(responses.map(async (respObj) => {
    return {
      blob: await respObj.res.blob(),
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
  return imgsObj;
}

function getPage(page) {
  let pages = {
    home: {
      content: /*html*/`
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
  return pages[page]
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

  let mainNode = document.getElementsByTagName("main")[0];
  //
  document.body.classList.add("disappear");

  setTimeout(() => {
    mainNode.innerHTML = getPage(currentPage).content;
    document.body.classList.remove("disappear");
  }, 250)
}

let images = null;

async function start() {

  images = await importResources();

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
