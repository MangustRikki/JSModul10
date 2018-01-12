let inputArray = document.querySelectorAll('.inputArray');
let getResult = document.querySelector('.getResult');
let clearResult = document.querySelector('.clearResult');
let result = document.querySelector('.result');

if (localStorage.myArr) {
    result.textContent = localStorage.myArr;
}

function addToArr(inputs) {
    "use strict";
    let newArr = Array.from(inputs, x => x.value).filter(x => x !== "");
    return newArr;
}

getResult.addEventListener('click', showLS);
clearResult.addEventListener('click', deleteLS)

function showLS(e) {
    e.preventDefault();
    localStorage.myArr = addToArr(inputArray);

    result.textContent = localStorage.myArr;
}

function deleteLS(e) {
    e.preventDefault();
    localStorage.clear();
    result.textContent = "Local Storage очищен!";
}