/*
  Portfolio Template by RushSite
  Author: Abdulroqib Oladipo
  Description: Beginner-friendly personal portfolio template
  License: Allowed to be used ONLY if paid for
 */

//make onclick function work with js
const sidebar = document.getElementById("sidebar");

function togglesidebar() {
  sidebar.classList.toggle("show");
}
//select all sections from html
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const certs = document.getElementById("certs");
const hero = document.getElementById("hero");
//show sections if link is clicked

//About Section
const aboutLink = document.querySelectorAll(".aboutLink");
aboutLink.forEach((link) => {
  link.addEventListener("click", () => {
    about.classList.add("animate");
    hero.style.display = "none";
    skills.classList.remove("animate");
    projects.classList.remove("animate");
    contact.classList.remove("animate");
    certs.classList.remove("animate");
  });
});

//Skills Section
const skillsLink = document.querySelectorAll(".skillsLink");
skillsLink.forEach((link) => {
  link.addEventListener("click", () => {
    skills.classList.add("animate");
    hero.style.display = "none";
    about.classList.remove("animate");
    projects.classList.remove("animate");
    contact.classList.remove("animate");
    certs.classList.remove("animate");
  });
});

//Projects Section
const projectsLink = document.querySelectorAll(".projectsLink");
projectsLink.forEach((link) => {
  link.addEventListener("click", () => {
    projects.classList.add("animate");
    hero.style.display = "none";
    about.classList.remove("animate");
    skills.classList.remove("animate");
    contact.classList.remove("animate");
    certs.classList.remove("animate");
  });
});

//Contact Section
const contactLink = document.querySelectorAll(".contactLink");
contactLink.forEach((link) => {
  link.addEventListener("click", () => {
    contact.classList.add("animate");
    hero.style.display = "none";
    projects.classList.remove("animate");
    about.classList.remove("animate");
    skills.classList.remove("animate");
    certs.classList.remove("animate");
  });
});

//Certification Section
const certLink = document.querySelectorAll(".certsLink");
certLink.forEach((link) => {
  link.addEventListener("click", () => {
    certs.classList.add("animate");
    hero.style.display = "none";
    contact.classList.remove("animate");
    projects.classList.remove("animate");
    about.classList.remove("animate");
    skills.classList.remove("animate");
  });
});
//You are only allowed to use this template if it was paid for -->
//Built by Abdulroqib Oladipo