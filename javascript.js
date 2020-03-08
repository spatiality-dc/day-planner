var dateAndTime = document.querySelector("#time-of-day");
var currentTime;
renderTime();
colourChanges();

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

function colourChanges() {
  $(".time-block").each(function() {
    const now = parseInt(moment().format("H"));
    const span = parseInt($(this).attr("data-time"));
    if (span < now) {
      $(this).attr("class", "past");
    } else if (now == span) {
      $(this).attr("class", "present");
    } else {
      $(this).attr("class", "future");
    }
  });
}
