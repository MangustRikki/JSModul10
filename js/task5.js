
let result = document.querySelector('.result');
let getResult = document.querySelector('.getResult');

getResult.addEventListener('click', showLS);

function showLS(e) {
    e.preventDefault();
        let lsListText = '';

    for (var key in localStorage) {
        lsListText += '<p><b>' + key + '</b> : ' + localStorage[key] + '</p>';
    }

    let divRes = document.createElement("div");
    divRes.style.cssText = "background-color:rgba(0,0,0,.8);color:snow;position:fixed;bottom:10px;left:50%;transform:translate(-50%,0);width:97%;padding:5px";
    divRes.innerHTML = lsListText;
    document.body.append(divRes);
}