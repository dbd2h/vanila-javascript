const $clock = document.querySelector(".momentum-clock");

const getTime = function () {
  const thisDate = new Date();
  const timeList = [];
  timeList.push(thisDate.getHours());
  timeList.push(thisDate.getMinutes());
  for (let i = 0; i < 2; i++) {
    if (timeList[i] < 10) {
      timeList[i] = "0" + String(timeList[i]);
    }
  }
  $clock.innerHTML = `${timeList[0]}:${timeList[1]}`;
};
getTime();
setInterval(getTime, 1000);
