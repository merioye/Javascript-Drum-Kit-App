// array of sounds path
let audios = ['sounds/sounds_sound-1.mp3', 'sounds/sounds_sound-2.mp3', 'sounds/sounds_sound-3.mp3', 'sounds/sounds_sound-4.mp3', 'sounds/sounds_sound-5.mp3', 'sounds/sounds_sound-6.mp3', 'sounds/sounds_sound-7.mp3'];
// setInterval id that will help us to clear it
let id;

// Selecting elements
let soundBtns = document.querySelectorAll('.sound-btn-wrapper');
let startAuto = document.querySelector('#start-auto-music-btn');
let stopAuto = document.querySelector('#stop-auto-music-btn');
let volumeLevel = document.querySelector('#volume-level');



// Utility function that will play the respective audio when the key is pressed 
let playAudio = (ind)=>{
    let audio = new Audio(audios[ind]);
    audio.play();
    audio.volume = (volumeLevel.value)/100;
}


// Listener to play respective audio when the key is pressed
window.addEventListener('keypress', (e)=>{
    let key = e.key;
    switch(key){
        case 'u':
            playAudio(0);
            console.log('hello');
            break;
        case 'm':
            playAudio(1);
            break;
        case 'a':
            playAudio(2);
            break;
        case 'i':
            playAudio(3);
            break;
        case 'r':
            playAudio(4);
            break;
        case 's':
            playAudio(5);
            break;
        case 't':
            playAudio(6);
            break;
    }
});




// Funtion to create a random number between 0 and 6
const rand = ()=>{
    return Math.floor(Math.random()*(soundBtns.length-1));
}


// Iterating over the all sound-buttons to add listner(that will play respective sound on click)

soundBtns.forEach((val, ind)=>{
    val.addEventListener('click', ()=>{
        val.classList.add('animation');
        let audio = new Audio(audios[ind]);
        audio.play();
        audio.volume = (volumeLevel.value)/100;
    })
});





// Listener that will start auto music by picking random src form audios array on click
startAuto.addEventListener('click', ()=>{
    startAuto.className = 'animation'
    startAuto.style.display = 'none';
    stopAuto.style.display = 'block';
    id = setInterval(()=>{
        let random = rand();
        let audio = new Audio(audios[random]);
        audio.play();
        audio.volume = (volumeLevel.value)/100;
    },500);
});


// Listener that will stop the auto playing music on click
stopAuto.addEventListener('click', ()=>{
    stopAuto.className = 'animation';
    stopAuto.style.display = 'none';
    startAuto.style.display = 'block';
    clearInterval(id);
});



