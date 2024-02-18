function bgVideo(src) {
    document.addEventListener("DOMContentLoaded", () => {
        let bgVideo = document.getElementsByClassName("bgVideo");

        if(bgVideo){
            let bgVideoSrc = `<video autoplay muted loop
                src="${src}">
                </video>`;
                bgVideo[0].innerHTML = bgVideoSrc;
        }
        bgVideo[0].firstChild.playbackRate = 1
    })
}
