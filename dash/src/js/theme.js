const body = document.getElementById('body')
const themeButton = document.getElementById('theme-btn')

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    console.log(body.classList);
});

