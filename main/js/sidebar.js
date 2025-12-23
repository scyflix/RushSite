const menuIcon = document.querySelector(".menuIcon");
const sidebarContainer = document.getElementById("sidebarContainer");
const topbar = document.getElementById("topbar");
const middlebar = document.getElementById("middlebar");
const bottombar = document.getElementById("bottombar");
const body = document.body;
//Sidebar cancel icon
function cancelIcon() {
  topbar.classList.add("crossForward");
  bottombar.classList.add("crossBackward");
  middlebar.classList.add("remove");
  body.classList.add("scrollLock");
}

//sidebar cancel icon remove
function cancelIconRemove() {
  topbar.classList.remove("crossForward");
  bottombar.classList.remove("crossBackward");
  middlebar.classList.remove("remove");
  body.classList.remove("scrollLock");
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

//Preloader
const preloader = document.querySelector(".preloader");
const span = document.createElement("span");

for (let i = 0; i < 3; i++) {
  const copy = span.cloneNode(true);
  preloader.appendChild(copy);
  body.classList.add("scrollLock");
}

window.addEventListener("load", () => {
  preloader.classList.add("noDisplay");
  body.classList.remove("scrollLock");
})

