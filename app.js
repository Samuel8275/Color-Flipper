const btn = document.getElementById('btn');
const colors = ['red', 'blue', 'green', '#fff', '#000', '#ccc', 'yellow', '#f2e', '#93e', '#fee', '#eee', '#69a' ]
const color = document.querySelector('.color');


btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}
