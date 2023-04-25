$(document).ready( function() {
    colorChange ();
});

function colorChange () {
    
    var currentTime = dayjs().hour();
    console.log("Current Time" + currentTime);
       
    $(".input").each(function () {
        var scheduledTime = parseInt($(this).attr("id"));
        console.log(scheduledTime);

        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

var saveBtns=$(".saveBtn")
saveBtns.on("click", function() {
    var value = $(this).siblings(".description").val()
    var timeblock = $(this).parent().attr("id")
    localStorage.setItem(timeblock,value)
})

for(var i =9;i<18;i++){
    $("#"+i).val(localStorage.getItem(i + ":00"))
}

