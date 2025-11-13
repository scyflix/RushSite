function removeEdit() {
  const yes = confirm("Clear all saved edits?");
  if (!yes) return;

  localStorage.clear();
  location.reload();
}
document
  .querySelectorAll("[contenteditable][data-field]")
  .forEach((element) => {
    // Load saved value
    const saved = localStorage.getItem(element.dataset.field);
    if (saved) element.innerHTML = saved;

    // Save when typing
    element.addEventListener("input", () =>
      localStorage.setItem(element.dataset.field, element.innerHTML)
    );
  });
//Light mode
function lightmode() {
  const body = document.body;
  const lightBtn = document.getElementById("lightmode");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    lightBtn.innerText = "Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    lightBtn.innerText = "Light Mode";
    localStorage.setItem("theme", "dark");
  }
}
