const $button = document.querySelector(".login-form__submit");
const $input = document.querySelector('.login-form>form>input[type="text"]');
const $firstScreen = document.querySelector(".first-screen");
const $momentumScreen = document.querySelector(".momentum");
const $loginForm = document.querySelector(".login-form");
const $greeting = document.querySelector(".momentum-greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
let username = localStorage.getItem(USERNAME_KEY);

function toggleTool() {
  $firstScreen.classList.toggle(HIDDEN_CLASSNAME);
  $momentumScreen.classList.toggle(HIDDEN_CLASSNAME);
}

const onClick = function (event) {
  username = $input.value;
  localStorage.setItem(USERNAME_KEY, username);
};

function timeSelect() {
  const hourNow = new Date().getHours();
  if (hourNow < 6) {
    $greeting.innerHTML = `Good Night ${username}.`;
  } else if (hourNow >= 6 || hourNow < 12) {
    $greeting.innerHTML = `Good Morning ${username}.`;
  } else if (hourNow >= 12 || hourNow < 18) {
    $greeting.innerHTML = `Good Afternoon ${username}.`;
  } else {
    $greeting.innerHTML = `Good Evening ${username}.`;
  }
}
timeSelect();
setInterval(timeSelect, 1000);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  toggleTool();
  $loginForm.addEventListener("submit", onClick);
}
