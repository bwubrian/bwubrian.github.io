/*
document.addEventListener("click", function(){
    var roar = new Audio('sitcom-laughing-1.mp3');
    roar.play();
});
*/


$("#roarer").on("click",roar());

function roar(){
    var roar = new Audio('single_roar_from_lion.mp3');
    roar.play();
}
