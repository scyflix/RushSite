const menuIcon = document.querySelector(".menuIcon");
const sidebarContainer = document.getElementById("sidebarContainer");
const topbar = document.getElementById("topbar");
const middlebar = document.getElementById("middlebar");
const bottombar = document.getElementById("bottombar");
function cancelIcon() {
  topbar.classList.add("crossForward");
  bottombar.classList.add("crossBackward");
  middlebar.classList.add("remove");
}
function cancelIconRemove() {
  topbar.classList.remove("crossForward");
  bottombar.classList.remove("crossBackward");
  middlebar.classList.remove("remove");
}
menuIcon.addEventListener("click", () => {
  const open = sidebarContainer.classList.toggle("show");
  open ? cancelIcon() : cancelIconRemove();
});
sidebarContainer.addEventListener("click", (e) => {
  if (e.target === sidebarContainer) {
    sidebarContainer.classList.remove("show");
    cancelIconRemove();
  }
});
