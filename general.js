
// Hide hero content at paragraph of content

// now show the sign up button
let isDisplayed = true;
// add scroll event listener
document.addEventListener('scroll', () => {
  // select array of content to hide
  const content = [document.querySelector('.hero .content h1'),
    document.querySelector('.hero .content p'), document.querySelector('.hero .content div')];
  // select sign up button to show
  const signUp = document.querySelector('.hero .sign-up-button');
  // get the marker to check spot on page
  const yspot = document.querySelector('#scrollMarker').offsetTop;
  // check if we are past spot to hide content
  if ((document.documentElement.scrollTop > yspot) && isDisplayed) {
    isDisplayed = false;
    // hide
    TweenMax.to(content, 0.4, { y: 200, opacity: 0, display: 'none' });
    // show 
    setTimeout( () =>{
      TweenMax.fromTo(signUp, 0.4, { y: 200, opacity: 0, display: 'none' }, { y: 0, opacity: 1, display: 'block' })
    }, 400,
    );
  } else if ((document.documentElement.scrollTop < yspot) && !isDisplayed) {
    // hide
    TweenMax.to(signUp, 0.4, { y: 200, opacity: 0, display: 'none' });
    // show
    setTimeout( () =>{
      TweenMax.fromTo(content, 0.4, { y: 200, opacity: 0, display: 'none' }, { y: 0, opacity: 1, display: 'block' })
    }, 400,
    );
    isDisplayed = true;
  }
})
// function to check height
