const menuEl = document.querySelector(".menu");
const navEl = document.querySelector(".nav");

menuEl.addEventListener("click", function () {
  navEl.classList.toggle("open");
});

/////////////////////////////////////////////////////
const alllikeEl = document.querySelectorAll(".home__like");
const alllikedEl = document.querySelectorAll(".home__liked");

alllikeEl.forEach(function (likeEl) {
  likeEl.addEventListener("click", function () {
    likeEl.classList.toggle("home__like");
    likeEl.classList.toggle("home__liked");
  });
});

alllikedEl.forEach(function (likedEl) {
  likedEl.addEventListener("click", function () {
    likedEl.classList.toggle("home__like");
    likedEl.classList.toggle("home__liked");
  });
});
