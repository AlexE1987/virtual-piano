const btnLetters = document.querySelector('.btn-letters');
const btnNotes = document.querySelector('.btn-notes');

const pianoKeys = document.querySelectorAll('.piano-key');
const piano = document.querySelector('.piano')

//add listener for switch Notes/Letters

btnLetters.addEventListener('click', event => {
    if(!event.target.classList.contains('btn-active')){
        event.target.classList.add('btn-active');        
        btnNotes.classList.remove('btn-active');

        pianoKeys.forEach(elem => {        
                elem.classList.add('piano-key-letter')
                });
    }; 
});

btnNotes.addEventListener('click', event => {
    if(!event.target.classList.contains('btn-active')){
        event.target.classList.add('btn-active');
        btnLetters.classList.remove('btn-active');

        pianoKeys.forEach(elem => {        
            elem.classList.remove('piano-key-letter')
            });
    };    
});

// implement function playAudio() and add listeners on mouse for piano keys  

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
};

const startSound = (event) => {
    const note = event.target.dataset.note;    
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);

    event.target.classList.remove('piano-key-remove-mouse');
    event.target.classList.add('piano-key-active');
    event.target.classList.add('piano-key-active-pseudo');
};

const stopSound = (event) => {
    event.target.classList.add('piano-key-remove-mouse');
    event.target.classList.remove('piano-key-active');
    event.target.classList.remove('piano-key-active-pseudo');
}

const startCorrespondOver = (event) => {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);

    event.target.classList.remove('piano-key-remove-mouse');
    event.target.classList.add('piano-key-active');
    event.target.classList.add('piano-key-active-pseudo');

    pianoKeys.forEach((elem) => {
        elem.addEventListener('mouseover', startSound);
    });

    pianoKeys.forEach((elem) => {
        elem.addEventListener('mouseout',stopSound);
    });
};

const stopCorrespondOver = () => {
    pianoKeys.forEach((elem) => {
        elem.classList.add('piano-key-remove-mouse');
        elem.classList.remove('piano-key-active');
        elem.classList.remove('piano-key-active-pseudo');
        elem.removeEventListener('mouseover', startSound);
    });

    pianoKeys.forEach((elem) => {
        elem.removeEventListener('mouseout', stopSound);
    });
};

piano.addEventListener('mousedown', startCorrespondOver);
piano.addEventListener('mouseup', stopCorrespondOver);

// Add keybord keys listeners

const startSoundKey = (event) => {
    if(event.repeat) return;

    const key = event.code.slice(-1);
    pianoKeys.forEach((elem) => {             
        if (key == elem.dataset.letter) {                      
            const note = elem.dataset.note;    
            const src = `assets/audio/${note}.mp3`;
            playAudio(src);
            elem.classList.add('piano-key-active');
        };
    });
};

const stopSoundKey = (event) => {

    const key = event.code.slice(-1);
    pianoKeys.forEach((elem) => {             
        if (key == elem.dataset.letter) {
            elem.classList.remove('piano-key-active');
        };
    });
}

window.addEventListener('keydown', startSoundKey);
window.addEventListener('keyup', stopSoundKey);



