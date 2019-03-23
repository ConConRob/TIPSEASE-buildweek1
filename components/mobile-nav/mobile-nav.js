(function () {
  // select nav
  const openButton = document.querySelector(".open-nav");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeButton = document.querySelector(".close-nav");
  // select mobile nav links
  const mobileNavLinks = document.querySelectorAll(".mobile-nav .links a");
  openButton.addEventListener("click", openMobileNav);
  closeButton.addEventListener("click", closeMobileNav);
  // if link is clicked in mobile nav, close the mobile nav
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  function openMobileNav() {
    // mobileNav.style.display = "flex";
    TweenMax.to(mobileNav, 0.4, { opacity: 1, display: 'flex' });
  }

  function closeMobileNav() {
    TweenMax.to(mobileNav, 0.4, { opacity: 0, display: 'none' });
  }
})();
