const $todoButton = document.querySelector(".momentum-footer__todolist");
const $newTodo = document.querySelector(".todoscreen-content__button");
const $todoscreen = document.querySelector(".todoscreen");
const $todoinput = document.querySelector(".todoscreen-content>input");
const $checklists = document.querySelector(".checklists");
const checklists = [];
let todoTrue = false;

$todoButton.addEventListener("click", () => {
  if (!$todoscreen.classList.contains("hidden") && !todoTrue) {
    $todoinput.classList.add("hidden");
    $newTodo.classList.remove("hidden");
  }
  $todoscreen.classList.toggle("hidden");
});

$newTodo.addEventListener("click", () => {
  $newTodo.classList.toggle("hidden");
  $todoinput.classList.toggle("hidden");
});

$todoinput.addEventListener("keypress", (event) => {
  const content = event.target.value;
  event.target.value = "";
  if (content == "" || event.key !== "Enter") {
    return;
  }

  const $div = document.createElement("div");
  const $checkBox = document.createElement("div");
  const $checkIcon = document.createElement("i");
  const $checkEllipsis = document.createElement("i");
  const $checkSpan = document.createElement("span");
  $checkSpan.innerHTML = content;
  $checkEllipsis.setAttribute("class", "fas fa-ellipsis-h");
  $checkIcon.setAttribute("class", "fas fa-check");
  $checkBox.append($checkIcon);
  $checkBox.addEventListener("click", () => {
    $div.classList.toggle("checked");
  });
  $div.append($checkBox);
  $div.append($checkSpan);
  $div.append($checkEllipsis);
  $div.classList.add("todoCheckList");
  $checklists.append($div);
  $checklists.classList.remove("hidden");
  document.querySelector(".todoscreen-content>span").classList.add("hidden");
  document
    .querySelector(".todoscreen-content>.todoscreen-content__switch")
    .classList.add("hidden");
  document
    .querySelector(".todoscreen-content>.todoscreen-content__button")
    .classList.add("hidden");
  todoTrue = true;
});

/*해야할 list
1. 날씨
2. todo ellipsis기능 살리기
3. todo 데이터에 넣기
*/
