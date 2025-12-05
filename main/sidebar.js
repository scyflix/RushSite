const menuIcon = document.querySelector(".menuIcon");
const sidebarContainer = document.getElementById("sidebarContainer");
const topbar = document.getElementById("topbar");
const middlebar = document.getElementById("middlebar");
const bottombar = document.getElementById("bottombar");


//Sidebar cancel icon
function cancelIcon() {
  topbar.classList.add("crossForward");
  bottombar.classList.add("crossBackward");
  middlebar.classList.add("remove");
}

//sidebar cancel icon remove
function cancelIconRemove() {
  topbar.classList.remove("crossForward");
  bottombar.classList.remove("crossBackward");
  middlebar.classList.remove("remove");
}

//sidebar toggle
menuIcon.addEventListener("click", () => {
  const open = sidebarContainer.classList.toggle("show");
  open ? cancelIcon() : cancelIconRemove();
});

//close sidebar when clciking
sidebarContainer.addEventListener("click", (e) => {
  if (e.target === sidebarContainer) {
    sidebarContainer.classList.remove("show");
    cancelIconRemove();
  }
});