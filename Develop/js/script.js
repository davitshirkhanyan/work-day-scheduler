// add current day to the header
$("#currentDay").text(moment().format("MMMM DD YYYY hh:mm:ss A"));
let currentDate = function () {
$("#currentDay").text(moment().format("MMMM DD YYYY hh:mm:ss A"));
};

// add work schedule variable 
let workHours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];

// add function to update the date with colors
function updatetime() {
  let currentTime = moment().format('H');

  for(let i = 0; i < workHours.length; i++) {
    if (parseInt(workHours[i]) > currentTime) {
      $("#text-" + i).removeClass("past");
      $("#text-" + i).addClass("future");
    }
    else if (parseInt(workHours[i]) < currentTime) {
      $("#text-" + i).addClass("past");
    }
    else {
      $("#text-" + i).removeClass("past");
      $("#text-" + i).addClass("present");
    }
  }
};

$(document).ready(function() {
    if(!localStorage.getItem('workSchedule')) {
        updateWorkSchedule(workHours);
    } else {
        updateWorkSchedule(JSON.parse(localStorage.getItem('workSchedule')));
        updatetime();
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
    } else {
        let workDay = JSON.parse(localStorage.getItem('workSchedule'));
        workDay[key] = value;
        saveObjToLocalStorage(workDay);
    }
};

let updateWorkSchedule = function(dayObj) {
    $(".row").each(function() {
        let result = $(this).children("div");
        $(this).children("textarea").text(dayObj[result.text()]);
    });
};

// use save button function
$("button").on("click", function(key, value) {
    key = $(this).siblings("div").text();
    value = $(this).siblings("textarea").val();
    getScheduleDay(key, value);
});
  
setInterval(currentDate, 1000);
