const heroImgContainer = document.getElementById("heroImg");
const heroImg = document.querySelector(".img");

heroImg.addEventListener("click", (e) => {
  e.stopPropagation();
  heroImgContainer.classList.add("displayImg");
});

heroImgContainer.addEventListener("click", () => {
  heroImgContainer.classList.remove("displayImg")
})