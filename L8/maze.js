$(document).ready(function(){
    let isWin = false;  // Default to false at start
    let isStart = false;

    $("#start").click(function(){
        if(!isStart){
            isStart = true;
            isWin = true;  // Assume player wins until they lose
            $('#maze > div.boundary').removeClass('youlose');
            $("#status").text('Started!...');
        }
    });

    $("#end").mouseover(function(){
        if(isStart){
            if(isWin){
                $("#status").text('You win!!!');
            } else {
                $("#status").text("You lost. :(");
            }
            isStart = false;  // End game after interacting with the end
        }
    });

    $('#maze > div.boundary').mouseover(function(){
        if(isStart){
            $('#maze > div.boundary').addClass('youlose');
            $("#status").text("Game Over!!! :(");
            isWin = false;  // Player loses if they hit the boundary
            isStart = false;  // End game
        }
    });

    $("body, div#maze, div#maze div").mouseover(function(e){
        if (isStart) {
            if (this.className != "boundary" && this.id != "maze" && this.nodeName != "DIV") {
                // Disable cheating by checking if the mouse is outside the maze and boundary
                $("#status").text("You lost. :(");
                $("#maze > div.boundary").addClass("youlose");
                isWin = false;
                isStart = false;  // End game
            }
        }
        e.stopPropagation();  // Prevent event bubbling
    });
});
