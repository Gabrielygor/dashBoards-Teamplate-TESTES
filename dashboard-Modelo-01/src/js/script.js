
const themeBtn = document.getElementById('theme-btn');
const body = document.getElementById('body');

const searchDiv = document.getElementById('state-select-toggle');
const stateIcon = document.getElementById('state-select-toggle__icon')
const searchList = document.getElementById('state-select-list')


themeBtn.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-mode');
});


searchDiv.addEventListener('click',() => {
    searchList.classList.toggle('state-select-list--show');
    stateIcon.classList.toggle('state-select-toggle__icon--rotate');
} )

console.log();