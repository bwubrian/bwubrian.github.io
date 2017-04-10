$("#go").on("click",addTruth);


function addTruth(){
    var inputText = $("#text_input").val();
    var truth = inputText+" is not as awesome as Brian Wu";
    document.getElementById("output").innerHTML = truth;
}

$(document).keypress(makeThisHappen);

function makeThisHappen(event){
    
    if(event.charCode == 13){
        $("#go").trigger("click");
    }
    
    //("#go").trigger("click");
}