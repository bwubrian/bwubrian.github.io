document.getElementById("go").onclick = function(){
    var inputText = $("#text_input").val();
    var truth = inputText+" is not as awesome as Brian Wu";
    document.getElementById("output").innerHTML = truth;
}