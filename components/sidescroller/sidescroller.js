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
      // console.log ("scrolled");
      // is going down
      if (!this.stopScroll) {
        if (this.navAtzero()) {
          // case 1 going down
          if (this.isDown()) {
            // need to scroll side bar right ?
            if (this.isScrollLeftorRight() !== "right") {

              // set y scroll
              this.holdYScroll();
            
              // scroll to the left
              this.element.scrollLeft += 50;
              console.log('going down');
            }
          } else if (!this.isDown()) {
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

  navAtzero() {
    const nav = document.querySelector('.nav');
    const bound = nav.getBoundingClientRect();
    const top = bound.top;
    if ((-40 < top) && (top < 40)) {
      return true;
    }
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
    } if ((this.element.scrollLeft + this.element.clientWidth) === this.element.scrollWidth) {
      return "right";
    }
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
