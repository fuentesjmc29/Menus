setTimeout (function () {
    alert("Click Psyduck image to hear the surprise!");
}, 300);


document.querySelector(".psyduck").addEventListener("click", function () { 
    var audio = new Audio('sounds/sound-psyduck.mp3');
    audio.play();
});