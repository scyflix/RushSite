//download html file
function exportHTML() {
  const downloadBtn = document.getElementById("downloadbtn");
  setTimeout(() => {
    downloadBtn.innerText = "Exporting...";
  }, 1000);
  setTimeout(() => {
    downloadBtn.innerText = "Exported";
  }, 2000);
  setTimeout(() => {
    downloadBtn.innerText = "Export HTML";
  }, 3000);

  // Clone the whole HTML document
  const doc = document.documentElement.cloneNode(true);
  // Remove the script that handles editing
  doc.querySelector(".editorScript")?.remove();

  // Remove contenteditable + data-field attributes
  doc.querySelectorAll("[contenteditable]").forEach((element) => {
    element.removeAttribute("contenteditable");
    element.removeAttribute("data-field");
  });
  // Remove reset & export buttons
  doc.querySelectorAll(".actionbtn").forEach((btn) => btn.remove());
  //Remove header and editor style
  doc.querySelector("#header")?.remove();
  doc.querySelector("#editorStyle")?.remove();

  // Turn document into a string
  const htmlString = "<!DOCTYPE html>\n" + doc.outerHTML;

  // Create downloadable file
  const blob = new Blob([htmlString], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "index.html";
  a.click();

  URL.revokeObjectURL(url);
}
