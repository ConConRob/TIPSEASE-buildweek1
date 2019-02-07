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
  }

  showLogin() {
    // this.loginMenu.classList.remove('hide');
    TweenMax.to(this.loginMenu, 0.4, { opacity: 1, display: 'flex' });
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
}

// target all instances of login buttons
const loginButtons = document.querySelectorAll('.login');
loginButtons.forEach(loginButton => new Login(loginButton));
