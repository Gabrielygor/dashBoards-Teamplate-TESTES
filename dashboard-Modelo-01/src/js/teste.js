const themeBtn = document.getElementById('theme-btn');
const body = document.getElementById('body');

const searchDiv = document.getElementById('state-select-toggle');
const stateIcon = document.getElementById('state-select-toggle__icon');
const searchList = document.getElementById('state-select-list');

const inputSearch = document.getElementById('state-select-list__search');

const inputOptions = document.querySelectorAll('.state-select-list__item')

;//controla a mudança de temas do site

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

//contola quando o menu de seleção aparece 

searchDiv.addEventListener('click', () => {
    searchList.classList.toggle('state-select-list--show');
    stateIcon.classList.toggle('state-select-toggle__icon--rotate');
})


// Filtro para o campo de search

inputSearch.addEventListener('keyup', (e) => {
    const search = e.target.value.toLowerCase();

    for (const item of inputOptions) {
        const state = item.innerText.toLowerCase()

        if (state.includes(search)) {
            item.classList.remove('state-select-list__item--hide')
        } else {
            item.classList.add('state-select-list__item--hide')
        }
    }
})
