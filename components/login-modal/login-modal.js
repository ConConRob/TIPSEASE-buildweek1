// login class
class Login {
  constructor(loginButton) {
    this.button = loginButton;
    this.loginMenu = document.querySelector('.login-modal');
    loginButton.addEventListener('click', () => this.showLogin());
    this.closeButton = this.loginMenu.querySelector('.close-modal');
    this.closeButton.addEventListener('click', () => this.hideLogin());
    // close if clicked on area around login content
    this.loginMenu.addEventListener('click', (event) => {
      this.checkWhereClickandHide(event.target);
    });
    // set the height for the window size
  }

  showLogin() {
    // this.loginMenu.classList.remove('hide');
    this.loginMenu.style.display = "flex";
    this.setHeight();
    TweenMax.to(this.loginMenu, 0.4, { opacity: 1 });
  }

  hideLogin() {
    // this.loginMenu.classList.add('hide');
    TweenMax.to(this.loginMenu, 0.4, { opacity: 0, display: 'none' });
  }

  checkWhereClickandHide(target) {
    if (target === this.loginMenu) {
      this.hideLogin();
    }
  }

  setHeight() {
    const loginConent = this.loginMenu.querySelector('.login-content');
    loginConent.style.top = `${(window.innerHeight - loginConent.offsetHeight) / 2}px`;
  }
}

// target all instances of login buttons
const loginButtons = document.querySelectorAll('.login');
loginButtons.forEach(loginButton => new Login(loginButton));
