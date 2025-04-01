function KeyPressFunction(key, source) {
    this.key = key;
    this.source = source;


}

let klank = new Audio();

for (let i = 0; i < 7; i++) {
document.getElementsByTagName('button')[i].addEventListener('click', function () {

    var letter = this.textContent;
    makeSound(letter);
    buttonAnimation(letter);
    
});
}

document.addEventListener('keydown', function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case 'w':
            klank.src = 'sounds/crash.mp3';
            klank.play();
        break;
        
        case 'a':
            klank.src = 'sounds/kick-bass.mp3';
            klank.play();
        break;

        case 's':
            klank.src = 'sounds/snare.mp3';
            klank.play();
        break;

        case 'd':
            klank.src = 'sounds/tom-1.mp3';
            klank.play();
        break;

        case 'j':
            klank.src = 'sounds/tom-2.mp3';
            klank.play();  
        break;
        
        case 'k':
            klank.src = 'sounds/tom-3.mp3';
            klank.play();            
        break;     
        
        case 'l':
            klank.src = 'sounds/tom-4.mp3';
            klank.play();
        break;

        default:
            console.log('Het n fout gemaak');
    }

}

function buttonAnimation(keypress) {
    var buttonPressed = document.querySelector("." + keypress);

    buttonPressed.classList.add("pressed");

    setTimeout(function () {
        buttonPressed.classList.remove("pressed");
    }, 200);
}