const PopupContainer = document.getElementById("PopupContainer");
const cancelBtn = document.getElementById("cancelPopup");

cancelBtn.addEventListener("click", () => {
  PopupContainer.classList.add("cancel");
});
