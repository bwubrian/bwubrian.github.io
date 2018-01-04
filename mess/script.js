
document.addEventListener("click", function(){
    var roar = new Audio('assets/sitcom-laughing-1.mp3');
    roar.play();
});



$("#roarer").on("click",roar());

function roar(){
    var roar = new Audio('assets/single_roar_from_lion.mp3');
    roar.play();
}
