function gameStart(element) {
    let humanChoice = element.id;
    let randomNumber = Math.floor(Math.random() * 3);
    let options = ['rock', 'paper', 'scissors'];
    let botChoice = options[randomNumber];

    console.log('you chose:', humanChoice);
    console.log('bot chose:', botChoice);
    
    const boardLogic = {
        'rock': { 'rock': 0.5, 'paper': 0, 'scissors': 1 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'rock': 0, 'paper': 1, 'scissors': 0.5}
    }

    let result = boardLogic[humanChoice][botChoice];
    let resultBox = document.getElementById('result__box');
    let botBox = document.getElementById('bot__box');
    let humanBox = document.getElementById('human__box');
    if (result === 1) {
        resultBox.firstElementChild.remove();
        resultBox.innerHTML = '<h1 class="result-win">you win</h1>';
        botBox.setAttribute('class', 'win__shadow content-box');
        humanBox.setAttribute('class', 'win__shadow content-box');
        console.log('you win');
    } else if (result === 0.5) {
        resultBox.firstElementChild.remove();
        resultBox.innerHTML = '<h1 class="result-draw">match draw</h1>';
        botBox.setAttribute('class', 'draw__shadow content-box');
        humanBox.setAttribute('class', 'draw__shadow content-box');
        console.log('match draw');
    } else if (result === 0) {
        resultBox.firstElementChild.remove();
        resultBox.innerHTML = '<h1 class="result-lose">you lose</h1>';
        botBox.setAttribute('class', 'lose__shadow content-box');
        humanBox.setAttribute('class', 'lose__shadow content-box');
        console.log('you lose');
    }
    console.log(result);
    
    humanBox.lastElementChild.setAttribute('src', `imgs/${humanChoice}.png`);

    botBox.firstElementChild.setAttribute('src', `imgs/${botChoice}.png`);
}