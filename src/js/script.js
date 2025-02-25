function toggleMenu() {
  document.querySelector('.nav-list').classList.toggle('active');
}

function closeMenu() {
  document.querySelector('.nav-list').classList.remove('active');
}

function fecharPopup() {
  document.getElementById("modal").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementsByClassName("bg-video");

  video.play();

  video.addEventListener("pause", () => {
    video.play();
  });

  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.play();
  });
});
