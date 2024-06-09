
const themeBtn = document.getElementById('theme-btn');
const body = document.getElementById('body');

const searchDiv = document.getElementById('state-select-toggle');
const stateIcon = document.getElementById('state-select-toggle__icon');
const searchList = document.getElementById('state-select-list');


const inputSearch = document.getElementById('state-select-list__search');


themeBtn.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-mode');
});

searchDiv.addEventListener('click',() => {
    searchList.classList.toggle('state-select-list--show');
    stateIcon.classList.toggle('state-select-toggle__icon--rotate');
} )


inputSearch.addEventListener('keyup', (e) => {
    const search = e.target.value.toLowerCase();

    for(const item of inputOptions) {
        const state = item.innerText.toLowerCase()
        
        if(state.includes(search)) {
            item.classList.remove('state-select-list__item--hide')
        } else {
            item.classList.add('state-select-list__item--hide')
        }
    }

})

