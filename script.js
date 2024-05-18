const fruits = [
    { name: "Apple", image: "images/apple.png" },
    { name: "Lemon", image: "lemon.png" },
    { name: "Watermelon", image: "watermelon.png" },
    { name: "Pineapple", image: "pineapple.png" },
    { name: "Grape", image: "grape.png" }
];

function startLoading() {
    window.location.href = 'loading.html';
}

function startOver() {
    window.location.href = 'index.html';
}

function getRandomFruit() {
    const randomIndex = Math.floor(Math.random() * fruits.length);
    return fruits[randomIndex];
}



document.addEventListener('DOMContentLoaded', () => {
    const resultContainer = document.getElementById('result-container');
    if (resultContainer) {
        const fruit = getRandomFruit();
        document.getElementById('fruit-name').innerText = fruit.name;
        document.getElementById('fruit-image').src = fruit.image;
    }
});
