import secondsSinceDateFromToday from "./datediddler.js";

let userDate = document.getElementById("entered_date");
userDate.addEventListener("change", () => {
  var milliseconds = secondsSinceDateFromToday(userDate);
  var seconds = milliseconds / 1000;
  if (seconds) {
    document.getElementById("output").innerHTML = "seconds:" + seconds;
  }
});
