// login class
class Login {
  constructor(loginButton) {
    this.button = loginButton;
    this.loginMenu = document.querySelector('.login-modal');
    loginButton.addEventListener('click', () => this.showLogin());
  }

  showLogin() {
    console.log(this.loginMenu);
    this.loginMenu.classList.remove('hide');
  }
}

// target all instances of login buttons
const loginButtons = document.querySelectorAll('.login');
loginButtons.forEach(loginButton => new Login(loginButton));
console.log(loginButtons)
const test = document.querySelector('.login-modal');
console.log(test);