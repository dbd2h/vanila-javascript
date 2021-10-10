const $focusInput = document.querySelector(
  ".momentum-focus>input[type='text']"
);
const $momentumFocus = document.querySelector(".momentum-focus");
const $momentumFocuson = document.querySelector(".momentum-focuson");
const $focusonText = document.querySelector(".momentum-focuson__text");

const FOCUSNAME_KEY = "focusname";

function onSubmit(event) {
  event.preventDefault();
  const focusname = $focusInput.value;
  localStorage.setItem(FOCUSNAME_KEY, focusname);
  toggleTool();
  $focusonText.innerHTML = focusname;
}

function toggleTool() {
  $momentumFocus.classList.toggle(HIDDEN_CLASSNAME);
  $momentumFocuson.classList.toggle(HIDDEN_CLASSNAME);
}

const savedFocus = localStorage.getItem(FOCUSNAME_KEY);

if (savedFocus === null) {
  $momentumFocus.addEventListener("submit", onSubmit);
} else {
  $focusonText.innerHTML = savedFocus;
  toggleTool();
}
