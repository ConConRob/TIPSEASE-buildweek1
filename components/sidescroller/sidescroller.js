class SideScroller {
  constructor(element) {
    this.element = element;
    // Set the height
    this.element.style.height = this.element.dataset.height;
    // set the width of all scroll items
    this.scrollItems = document.querySelectorAll('side-scroll-section')
    document.addEventListener('scroll', () => {
      // if going down
      
      if (!this.isBellow()) {
        if (this.isScrollLeftorRight() !== "left") {
         
          // put in proper view for going up
          document.documentElement.scrollTop = document.querySelector('.nav').offsetTop-3;
          // go left
          this.element.scrollLeft -= 50;
          console.log("here left");
          
        }
      }
      else if (this.isBellow()) {
        if (this.isScrollLeftorRight() !== "right") {
         
          // put the element is proper view
          document.documentElement.scrollTop = document.querySelector('.nav').offsetTop;
          // scroll right
          console.log("here right");
          this.element.scrollLeft += 50;
         
        }
      }
    });
  }

  // check if at view spot
  isBellow() {
    const bound = this.element.getBoundingClientRect();
    // check if bot of element is touching bot of window
    const botCheck = bound.bottom < (window.innerHeight || document.documentElement.clientHeight);
    return botCheck;
  }

  isScrollLeftorRight () {
    if (this.element.scrollLeft === 0) {
      return "left";
    } if ((this.element.scrollLeft + this.element.clientWidth) === this.element.scrollWidth) {
      return "right";
    }
  }
}
// find side scroller and make a new object
let sideScroller = document.querySelector(".side-scroll");
sideScroller = new SideScroller(sideScroller);
