var dateAndTime = document.querySelector("#time-of-day");
var currentTime;
var storedEvents = {};
var eventsList = [];
renderTime();
colourChanges();

function renderTime() {
  currentTime = document.createElement("h3");
  currentTime.setAttribute("class", "lead");
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
      $(".event-entry").attr("contentEditable", "false");
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
  eventsList = JSON.parse(localStorage.getItem("storedEvents"));
  if (eventsList !== null) {
    storedEvents = eventsList;
  }
  renderEvents();
}
displayStoredEvents();

function storeEntry() {
  localStorage.setItem("storedEvents", JSON.stringify(storedEvents));
}

$(".clear").on("click", function() {
  var eventTime = $(this)
    .closest(".time-block")
    .attr("data-time");
  console.log(
    $(this)
      .prev()
      .attr("value")
  );
  if (
    $(this)
      .prev()
      .attr("value") === "unlocked"
  ) {
    $(this)
      .parent()
      .prev()
      .empty();
    storedEvents[eventTime] = "";
    storeEntry();
  }
});

$(".lock").on("click", function() {
  var eventTime = $(this)
    .closest(".time-block")
    .attr("data-time");
  if ($(this).attr("value") == "locked") {
    $(this).attr("value", "unlocked");
    $(this).html('<i class="fa fa-unlock"></i>');
    $(".event-entry").attr("contentEditable", "true");
  } else {
    $(this).attr("value", "locked");
    $(this).html('<i class="fa fa-lock"></i>');
    $(".event-entry").attr("contentEditable", "false");
    storedEvents[eventTime] = $(this)
      .parent()
      .prev()
      .text()
      .trim();
    storeEntry();
    displayStoredEvents();
  }
});
