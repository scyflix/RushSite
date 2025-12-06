const PopupContainer = document.getElementById("PopupContainer");
const cancelBtn = document.getElementById("cancelPopup");
const body = document.body;

if(!PopupContainer.classList.contains("cancel")) {
body.classList.add("popup-active");
}
// Function to close the popup
function closePopup() {
   PopupContainer.classList.add("cancel");
   setTimeout(() => {
     PopupContainer.style.display = "none";
   }, 2000);
   body.classList.remove("popup-active");
  }
cancelBtn.addEventListener("click", () => {
 closePopup();
});
