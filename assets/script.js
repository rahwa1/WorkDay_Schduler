//Displays the current time
$("#currentDay").text(moment().format("Do MMMM YYYY"));

//Storing the data into local storage when save button is clicked 


//Function that changes color based on the hour
function timeBlocks(){
    var currentHour = moment().hours();
    console.log(currentHour);
        $(".time-block").each(function () {
            var time = parseInt($(this).attr("id"));
            if (time < currentHour) {
                $(this).addClass("past");
            } else if (time === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
}

//Here I'm calling my functions
timeBlocks();





