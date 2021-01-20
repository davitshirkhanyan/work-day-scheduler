// add current day to the header
$("#currentDay").text(moment().format("MMMM DD YYYY hh:mm:ss A"));
let currentDate = function () {
$("#currentDay").text(moment().format("MMMM DD YYYY hh:mm:ss A"));
};

// add main function
$(document).ready(function() {
setInterval(currentDate, 1000);
updateWorkScheduleColor();
getWorkScheduleEvent();
});
   
// add function to update the date with colors
function updateWorkScheduleColor(){
    $("textarea").each(function(){
        let currentHour = moment().hour();
        let workScheduleHour = parseInt($(this).attr("id"));

        if (workScheduleHour === currentHour){
            $(this).addClass("present");
        } else if (workScheduleHour < currentHour){
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        };
    });
};

// use save button function to set the item in local storage
$("button").on("click", function(key, value) {
    key = $(this).siblings(".work-event").attr("id");
    value = $(this).siblings(".work-event").val();
    localStorage.setItem(key, value)
});

// add function to get the item from local storage
let getWorkScheduleEvent = function() {
    $(".work-event").each(function() {
        let result = $(this).attr("id");
        $(this).val(localStorage.getItem(result));
    });
};



