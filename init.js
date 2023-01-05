import "datediddler.js";

let userDate = document.getElementById("entered_date");
userDate.addEventListener("change", () => {
  console.log("date changed!");
  seconds = secondsSinceDateFromToday(userDate);
  this.document.getElementById("output").innerHTML = seconds;
});
