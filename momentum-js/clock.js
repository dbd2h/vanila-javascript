const $clock = document.querySelector(".momentum-clock");

const getTime = function () {
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  $clock.innerHTML = `${hour}:${minute}`;
};
getTime();
setInterval(getTime, 1000);
