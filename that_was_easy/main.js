/*global $*/

$("#easy").on("click",sayThatWasEasy);



function sayThatWasEasy(){
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}

$(document).keypress(makeThisHappen);

function makeThisHappen(event){
    if(event.charCode == 32){
        $("#easy").trigger("click");
    }
}






