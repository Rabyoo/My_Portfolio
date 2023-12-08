const styling_txt = document.querySelector(".container header .styling-txt h2");

const textLoad = () => {
    setTimeout(() => {
        styling_txt.textContent = 'Reda Maher';
    }, 0)
    setTimeout(() => {
        styling_txt.textContent = 'RABYOO';
    }, 4000)
}
textLoad();
setInterval(textLoad, 8000)