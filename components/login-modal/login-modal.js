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
      console.log(event.target);
      this.checkWhereClickandHide(event.target);
    });
  }

  showLogin() {
    this.loginMenu.classList.remove('hide');
    console.log(this.loginMenu.childNodes);
  }

  hideLogin() {
    this.loginMenu.classList.add('hide');
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
