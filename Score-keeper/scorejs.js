const p1 = {
    score : 0,
    name : "Player 1",
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#firstPlayer')
}
const p2 = {
    score : 0,
    name : "Player 2",
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#secondPlayer')
}
const resetbtn = document.querySelector('#resetButton');

let gameOver = false;
let winScore = 3;
let winSelect = document.querySelector('#playto'); 
winScore = parseInt(winSelect.value);



p1.button.addEventListener('click', function(){
    console.log('clicked first');

    if(gameOver === false) {
        p1.score ++;
        p1.display.innerText = p1.score;
        if(p1.score === winScore) { 
            gameOver = true;
            p1.button.disabled = true;
            p2.button.disabled = true;
            p1.display.classList.add('win-color');
            p2.display.classList.add('lose-color');
        }
    }
});

p2.button.addEventListener('click', function(){
    console.log('clicked second');

    if(gameOver === false) {
        p2.score ++;
        p2.display.innerText = p2.score;
        if(p2.score === winScore) { 
            gameOver = true;
            p1.button.disabled = true;
            p2.button.disabled = true;
            p2.display.classList.add('win-color');
            p1.display.classList.add('lose-color');
        }
    }
});

winSelect.addEventListener('change', function() {
    winScore = parseInt(winSelect.value);
    defaultVal();
})

resetButton.addEventListener('click', defaultVal);

function defaultVal() {
    gameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = p1.score;
    p2.display.innerText = p2.score;
    p1.button.disabled = false;
    p2.button.disabled = false;
    p1.display.classList.remove('win-color','lose-color');
    p2.display.classList.remove('win-color','lose-color');
}



