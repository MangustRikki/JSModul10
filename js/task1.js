let result = document.querySelector('.result');

if (typeof(Storage) !== "undefined") {
    result.textContent = "Ура, localStorage підтримується!!!";
    console.log("Ура, localStorage підтримується!!!");
} else {
    result.textContent = "Нажаль, localStorage не підтримується.";
    console.log("Нажаль, localStorage не підтримується.");
}