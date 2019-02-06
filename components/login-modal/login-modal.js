// login class
class Login {
  constructor(loginButton) {
    this.button = loginButton;
    this.loginMenu = document.querySelector('.login-modal');
    loginButton.addEventListener('click', () => this.showLogin());
    this.closeButton = this.loginMenu.querySelector('.close-modal');
    this.closeButton.addEventListener('click', () => this.hideLogin());
  }

  showLogin() {
    this.loginMenu.classList.remove('hide');
  }

  hideLogin() {
    this.loginMenu.classList.add('hide');
  }
}

// target all instances of login buttons
const loginButtons = document.querySelectorAll('.login');
loginButtons.forEach(loginButton => new Login(loginButton));
