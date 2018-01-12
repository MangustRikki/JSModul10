let popupWindow = document.querySelector('.popupWindow');
let closePopup = document.querySelector('.closePopup');
let agreed = document.getElementById('agreed');

if (window.localStorage.agreed !== 'true') {
    setTimeout(() => { showPopup()}, 4000);
}

function showPopup() {
    popupWindow.style.top = "50%";  
}

function hidePopup() {
    popupWindow.style.top = "-50%";
}

closePopup.addEventListener('click', checkAndHide);

function checkAndHide(e) {
    e.preventDefault();
    hidePopup();
    if (agreed.checked) {
        localStorage.agreed = true;
    console.log('true');
    }
    else {
        console.log('false');
    }
}