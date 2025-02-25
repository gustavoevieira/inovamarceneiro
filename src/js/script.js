function toggleMenu() {
  document.querySelector('.nav-list').classList.toggle('active');
}

function closeMenu() {
  document.querySelector('.nav-list').classList.remove('active');
}

function fecharPopup() {
  document.getElementById("modal").classList.add("hidden");
}
