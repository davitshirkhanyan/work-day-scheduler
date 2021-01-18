
$("#currentDay").text(moment().format("MMMM DD YYYY hh:mm:ss A"));

let currentDate = function () {
$("#currentDay").text(moment().format("MMMM DD YYYY hh:mm:ss A"));
};




















setInterval(currentDate, 1000);