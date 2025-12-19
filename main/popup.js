const PopupContainer = document.getElementById("PopupContainer");
const cancelBtn = document.getElementById("cancelPopup");

if (!PopupContainer.classList.contains("cancel")) {
  document.body.classList.add("popup-active");
}
// Function to close the popup
function closePopup() {
  PopupContainer.classList.add("cancel");
  setTimeout(() => {
    PopupContainer.style.display = "none";
  }, 500);
  document.body.classList.remove("popup-active");
}
cancelBtn.addEventListener("click", () => {
  closePopup();
});
