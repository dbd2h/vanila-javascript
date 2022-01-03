const $todoButton = document.querySelector(".momentum-footer__todolist");
const $newTodo = document.querySelector(".todoscreen-content__button");
const $todoscreen = document.querySelector(".todoscreen");
const $todoinput = document.querySelector(".todoscreen-content>form>input");
const $checklists = document.querySelector(".checklists");
const checklists = [];

$todoButton.addEventListener("click", () => {
  if (!$todoscreen.classList.contains("hidden")) {
    $todoinput.classList.add("hidden");
    $newTodo.classList.remove("hidden");
  }
  $todoscreen.classList.toggle("hidden");
});
$newTodo.addEventListener("click", () => {
  $newTodo.classList.toggle("hidden");
  $todoinput.classList.toggle("hidden");
});
$todoinput.addEventListener("submit", (event) => {
  event.preventDefault();
  const content = event.target.value;
  if (content == "") {
    return;
  }
  const $div = document.createElement("div");
});
