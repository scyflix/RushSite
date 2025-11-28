const menuIcon = document.querySelector(".menuIcon");
const sidebarContainer = document.getElementById("sidebarContainer");
menuIcon.addEventListener("click", () => {
  sidebarContainer.classList.toggle("show");
});
