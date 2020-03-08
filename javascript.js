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

function renderEvents() {
  $(".diary-entry").each(function() {
    var dataTime = $(this)
      .parent()
      .attr("data-time");
    var lock = $(this)
      .next()
      .children("lock");
    if (
      storedEvents.hasOwnProperty(dataTime) === true &&
      storedEvents[dataTime] !== ""
    ) {
      lock.attr("value", "locked");
      lock.html('<i class="fa fa-lock"></i>');
      $(this).attr("contentEditable", "false");
      $(this).text(storedEvents[dataTime]);
    } else {
      lock.attr("value", "unlocked");
      lock.html('<i class="fa fa-unlock"></i>');
      $(this).attr("contentEditable", "true");
    }
  });
}
function displayStoredEvents() {
  storedEventsList = JSON.parse(localStorage.getItem("storedEvents"));
  if (storedEventsList !== null) {
    storedEvents = storedEventsList;
  }
  renderEvents();
}
displayStoredEvents();

function storeEntry() {
  localStorage.setItem("storedEvents", JSON.stringify(storedEvents));
}
