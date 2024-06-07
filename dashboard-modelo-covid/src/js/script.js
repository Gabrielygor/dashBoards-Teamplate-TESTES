
const themeBtn = document.getElementById('theme-btn');
const body = document.getElementById('body');

themeBtn.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-mode');
    console.log(body.classList);
});
