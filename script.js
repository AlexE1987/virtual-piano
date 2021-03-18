const btnLetters = document.querySelector('.btn-letters');
const btnNotes = document.querySelector('.btn-notes');
const pianoKeys = document.querySelectorAll('.piano-key');


//add listener for switching Notes/Letters

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



