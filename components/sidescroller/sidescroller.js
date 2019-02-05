class SideScroller {
  constructor(element) {
    this.element = element;
    this.lastWindowHeight = document.documentElement.scrollTop;
    this.element.scrollLeft = 0;
    this.stopScroll = false;
    // Set the height
    this.scrollNumber = 0;
    this.element.style.height = this.element.dataset.height;
    // set the width of all scroll items
    this.scrollSection = document.querySelectorAll('.side-scroll-section').forEach((section) => {
      return new ScrollSection(section);
    });
    this.scrollItems = document.querySelectorAll('side-scroll-section');
    document.addEventListener('scroll', () => {
      // check to stop it from calling its self
      if (!this.stopScroll) {
        if (this.navAboveWindow()) {
          // case 1 going down
          if (this.isDown()) {
            // need to scroll side bar right ?
            //console.log(this.isScrollLeftorRight());
            if (this.isScrollLeftorRight() !== "right") {
              // set y scroll
              this.holdYScroll();
              // scroll to the right
              this.element.scrollLeft += 50;
              // console.log('going down');
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
              this.element.scrollLeft -= 50;
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

  // hold at scroller
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

  isScrollLeftorRight () {
    if (this.element.scrollLeft === 0) {
      return "left";
    } if ((this.element.scrollLeft + this.element.clientWidth+4) >= this.element.scrollWidth) {
      return "right";
    }
    // console.log(this.element.scrollLeft + this.element.clientWidth);
    // console.log(this.element.scrollWidth);
  }
}

class ScrollSection {
  constructor(section) {
    this.section = section;
    this.section.style.width = this.section.dataset.width;
  }
}
// find side scroller and make a new object
let sideScroller = document.querySelector(".side-scroll");
sideScroller = new SideScroller(sideScroller);
