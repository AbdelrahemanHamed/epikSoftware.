const video = document.querySelector("video");

window.addEventListener("scroll", function() {
  const y = window.scrollY / window.innerHeight;
  const currentTime = y * video.duration;
  video.currentTime = currentTime;
});