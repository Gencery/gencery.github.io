let pages = {
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

document.getElementsByTagName("main")[0].innerHTML = pages.experience.content;
