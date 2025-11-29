const menuIcon = document.querySelector(".menuIcon");
const sidebarContainer = document.getElementById("sidebarContainer");
const topbar = document.getElementById("topbar");
const middlebar = document.getElementById("middlebar");
const bottombar = document.getElementById("bottombar");
menuIcon.addEventListener("click", () => {
  sidebarContainer.classList.toggle("show");
  
  topbar.classList.toggle("crossForward");
  bottombar.classList.toggle("crossBackward");
  middlebar.classList.toggle("remove");
});
