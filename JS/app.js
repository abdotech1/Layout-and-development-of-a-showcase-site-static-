const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});


var i = 0;

function buttonClick() {
  document.getElementById('inc').value = ++i;
}

function removeclick() {
  i = 0;
  document.getElementById('inc').value = 0;
}


