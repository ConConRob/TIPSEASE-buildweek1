class SideScroller {
  constructor(element) {
    this.element = element;
    this.lastWindowHeight = document.documentElement.scrollTop;
    this.element.scrollLeft = 0;
    this.stopScroll = false;
    this.scrollNumber = 0;
    // make sure that the sizing is right when window is resized and on load
    this.setHeight();
    window.addEventListener('resize', () => { this.setHeight(); });
    // on scroll
    document.addEventListener('scroll', () => {
      // check to stop it from calling its self
      if (!this.stopScroll) {
        if (this.navAboveWindow()) {
          // case 1 going down
          if (this.isDown()) {
            // need to scroll side bar right ?
            if (this.isScrollLeftorRight() !== "right") {
              // set y scroll
              this.holdYScroll();
              // scroll to the right
              this.element.scrollLeft += 75;
            }
          }
        } else if (!this.navAboveWindow()) {
          if (!this.isDown()) {
            // going up
            // scroll left?
            if (this.isScrollLeftorRight() !== "left") {
              // set y scroll
              this.holdYScroll();
              // scroll to the left
              this.element.scrollLeft -= 75;
            }
          }
        }
      } else {
        this.stopScroll = false;
      }
    });
  }

  navAboveWindow() {
    return document.querySelector('.nav').getBoundingClientRect().top < 0;
  }

  // hold window in place scroller
  holdYScroll() {
    const pos = document.querySelector('.nav').offsetTop;
    this.lastWindowHeight = pos;
    this.stopScroll = true;
    document.documentElement.scrollTop = document.querySelector('.nav').offsetTop;
  }

  // check if at view spot
  isDown() {
    if (this.lastWindowHeight < document.documentElement.scrollTop) {
      this.lastWindowHeight = document.documentElement.scrollTop;
      return true;
    }
    this.lastWindowHeight = document.documentElement.scrollTop;
    return false;
  }

  // is the scroll object all the way left or right?
  isScrollLeftorRight() {
    if (this.element.scrollLeft === 0) {
      return "left";
    } if ((this.element.scrollLeft + this.element.clientWidth + 4) >= this.element.scrollWidth) {
      return "right";
    }
  }

  setHeight() {
    const nav = document.querySelector('header.nav');
    // check if in small screen view or normal screen
    if (window.innerWidth > 992) {
      this.element.style.height = `${window.innerHeight - nav.offsetHeight}px`;
    } else {
      // if in mobile state
      this.element.style.height = "";
    }
  }
}

// find side scroller and make a new object
let sideScroller = document.querySelector(".side-scroll");
sideScroller = new SideScroller(sideScroller);

// stop mouse down scrolling
window.addEventListener('mousedown', (event) => {
  if (event.button === 1) {
    event.preventDefault();
  }
});
