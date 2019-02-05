// select nav




const openButton = document.querySelector(".open-nav");
const mobileNav = document.querySelector(".mobile-nav");
const closeButton = document.querySelector(".close-nav");
openButton.addEventListener("click", () => {
  // mobileNav.style.display = "flex";
  TweenMax.to(mobileNav, 0.4, { opacity: 1, display: 'flex' });
});
closeButton.addEventListener("click", () => {
  TweenMax.to(mobileNav, 0.4, { opacity: 0, display: 'none' });
})
