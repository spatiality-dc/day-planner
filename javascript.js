var dateAndTime = document.querySelector("#time-of-day");
var currentTime;
renderTime();

function renderTime() {
  currentTime = document.createElement("h3");
  currentTime.setAttribute("class", "alert alert-primary text-center");
  dateAndTime.appendChild(currentTime);
  liveTime();
}

function liveTime() {
  currentTime.textContent =
    moment().format("dddd") + ", " + moment().format("MMMM Do YYYY, h:mm a");
  setInterval(liveTime, 30000);
}
