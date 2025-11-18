// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior:"smooth" });
    });
});

// Video Popup
const openVideo = document.getElementById("openVideo");
const closeVideo = document.getElementById("closeVideo");
const popup = document.getElementById("videoPopup");
const frame = document.getElementById("videoFrame");

openVideo.addEventListener("click", () => {
    popup.style.display = "flex";
    frame.src = "https://www.youtube.com/embed/1NpRo-pAIg4?autoplay=1";
});

closeVideo.addEventListener("click", () => {
    popup.style.display = "none";
    frame.src = "";
});
// SECOND VIDEO POPUP
const openVideo2 = document.getElementById("openVideo2");

openVideo2.addEventListener("click", () => {
    popup.style.display = "flex";
    frame.src = "https://www.youtube.com/embed/1NpRo-pAIg4?autoplay=1";
});
