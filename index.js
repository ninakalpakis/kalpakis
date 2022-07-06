// hamburger nav
document.getElementById("menu").addEventListener("click", function () {
  this.classList.toggle("menu-active");
  var el = document.getElementById("nav-bar");
  el.classList.toggle("nav-bar-active");
});

// confetti
document.getElementById("joy").addEventListener("mouseover", function () {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: {
      y: 0.6,
    },
  });
});

// accordion
document.querySelector('.language').addEventListener("click", function () {
  this.classList.toggle("tab-active");
});

document.querySelector('.tools').addEventListener("click", function () {
  this.classList.toggle("tab-active");
});

document.querySelector('.libraries').addEventListener("click", function () {
  this.classList.toggle("tab-active");
});


