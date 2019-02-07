
// Hide hero content at paragraph of content

// now show the sign up button
let isDisplayed = true;
// add scroll event listener
document.addEventListener('scroll', () => {
  // select array of content to hide
  const content = document.querySelector('.hero .content ');
  // document.querySelector('.hero .content p'), document.querySelector('.hero .content div')];
  // select sign up button to show
  const signUp = document.querySelector('.hero .sign-up-button');
  // get the marker to check spot on page
  const yspot = document.querySelector('#scrollMarker').offsetTop;
  // check if we are past spot to hide content
  if ((document.documentElement.scrollTop > yspot) && isDisplayed) {
    isDisplayed = false;
    // hide
    TweenMax.to(content, 0.2, { y: 100, opacity: 0, display: 'none' });
    // show
    setTimeout(() => {
      TweenMax.fromTo(signUp, 0.2, { y: 100, opacity: 0, display: 'none' }, { y: 0, opacity: 1, display: 'flex' });
    }, 200);
  } else if ((document.documentElement.scrollTop < yspot) && !isDisplayed) {
    // hide
    TweenMax.to(signUp, 0.2, { y: 100, opacity: 0, display: 'none' });
    // show
    setTimeout(() => {
      TweenMax.fromTo(content, 0.2, { y: 100, opacity: 0, display: 'none' }, { y: 0, opacity: 1, display: 'flex' });
    }, 200);
    isDisplayed = true;
  }
});

// set size of hero with respect to the nav
const hero = document.querySelector('.hero');
const nav = document.querySelector('header.nav');
hero.style.height = `${window.innerHeight - nav.offsetHeight}px`;
// make sure that the sizing is right when window is resized
window.addEventListener('resize', () => {
  hero.style.height = `${window.innerHeight - nav.offsetHeight}px`;
});
// scroll to what is tipsease when down arrow is clicked
document.querySelector('.hero .content .hero-button').addEventListener('click', () => {
  scrollTo(hero.offsetHeight - 20, 20);
});
// make sign up buttons take you to sign up form
document.querySelectorAll('.sign-up').forEach(button => button.addEventListener('click', () => {
  scrollTo(hero.offsetHeight, 20, () => {
    const sideScroll = document.querySelector(".side-scroll"); // this.element.scrollWidth
    sideScroll.scrollLeft = sideScroll.scrollWidth;
    scrollTo(sideScroll.offsetTop + sideScroll.offsetHeight, 20);
  });
}));
// takes in location speed and cb. goes to location at speed if location is
// out of reach it stops scrolling at bottom of page
// does call back function at end of scroll
function scrollTo(yLocation, speed, cb) {
  const scrollInterval = setInterval(() => {
    const curpos = document.documentElement.scrollTop + window.innerHeight;
    if ((window.pageYOffset < yLocation) && (curpos < document.documentElement.scrollHeight)) {
      document.documentElement.scrollTop += speed;
    } else {
      clearInterval(scrollInterval);
      if (cb) {
        cb();
      }
    }
  }, 10);
}
