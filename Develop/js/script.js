// add current day to the header
$("#currentDay").text(moment().format("MMMM DD YYYY hh:mm:ss A"));
let currentDate = function () {
$("#currentDay").text(moment().format("MMMM DD YYYY hh:mm:ss A"));
};

let workHours = {
  "8AM": "",
  "9AM": "",
  "10AM": "",
  "11AM": "",
  "12PM": "",
  "1PM": "",
  "2PM": "",
  "3PM": "",
  "4PM": "",
  "5PM": "",
};

$(document).ready(function() {
    if(!localStorage.getItem('workSchedule')) {
        updateWorkSchedule(workHours);
    } else {
        updateWorkSchedule(JSON.parse(localStorage.getItem('workSchedule')));
    }
});

// add functions to save items in localstorage
let saveLocalStorage = function() {
    localStorage.setItem('workSchedule', JSON.stringify(workHours));
};

let saveObjToLocalStorage = function(obj) {
    localStorage.setItem('workSchedule', JSON.stringify(obj));
};

// add functions to get items from localstorage
let getScheduleDay = function(key, value) {
    if(!localStorage.getItem('workSchedule')) {
        saveLocalStorage();
    }
        let workDay = JSON.parse(localStorage.getItem('workSchedule'));
        workDay[key] = value;
        saveObjToLocalStorage(workDay);
};

let updateWorkSchedule = function(dayObj) {
    $(".row").each(function() {
        let result = $(this).children("div");
        $(this).children("textarea").text(dayObj[result.text()]);
    });
};

// use save button function
$("button").click(function() {
    key = $(this).siblings("textarea").val();
    value = $(this).siblings("div").text();
    getScheduleDay(value, key);
});

setInterval(currentDate, 1000);