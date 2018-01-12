

let themeOne = document.getElementById('themeOne');
let themeTwo = document.getElementById('themeTwo');
let themeCss = document.querySelector('link');

if (localStorage.chosenCss) {
    themeCss.href = localStorage.chosenCss;
}

themeOne.addEventListener('click', setCssOne);
themeTwo.addEventListener('click', setCssTwo);



function setCssOne(e) {
    e.preventDefault();
    themeCss.href="../css/task21.css";
    setCssInStorage(themeCss);
}

function setCssTwo(e) {
    e.preventDefault();
    themeCss.href = "../css/task22.css";
    setCssInStorage(themeCss);
}

function setCssInStorage(theme) {
    localStorage.chosenCss = theme.href;
}

