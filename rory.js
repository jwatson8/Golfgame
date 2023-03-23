let start = document.querySelector('.start');
let form = document.querySelector('.form');
let displaying = document.querySelector('.displaying');
start.addEventListener('click', show)

let plays = document.querySelector('.submit');
let arr = document.querySelectorAll('.front');
let lst = document.querySelectorAll('.data')
plays.addEventListener('click', play);
plays.addEventListener('click', showing)

let game = document.querySelector('.first');
let game1 = document.querySelector('.last');
let frontYourScores = document.querySelectorAll('.front-you');
let opScores = document.querySelectorAll('.value');
let yourScores = document.querySelectorAll('.you');
let frontOpScore = document.querySelector('.front-opponent-score');
let frontYourScore = document.querySelector('.front-your-score');
let opScore = document.querySelector('.opponent-score');
let yourScore = document.querySelector('.your-score');
game.addEventListener('click', addScores1);
game.addEventListener('click', addScores2);
game1.addEventListener('click', addScores3);

function show() {
    form.style.display = 'block';
};
function play() {
    for (i = 0; i < arr.length; i++){
        lst[i].innerHTML = String(arr[i].value);
    }
};
function showing() {
    displaying.style.display = 'block';
};
function addScores1() {
    let num1 = 0;
    for (i = 0; i < frontYourScores.length; i++) {
        num1 += Number(frontYourScores[i].value);
    }
    frontYourScore.innerHTML = String(num1);
}
function addScores2() {
    let num1 = 0;
    for (i = 0; i < yourScores.length; i++) {
        num1 += Number(yourScores[i].value);
    }
    yourScore.innerHTML = String(num1);
}

function addScores3() {
    for (i = 0; i < opScores.length; i++){
        if (opScores[i].innerHTML == 0 && lst[i].innerHTML == 3){
            let num = Math.round(Math.random()*10000)/100;
            if (num < 0.011){
                opScores[i].innerHTML = 1;
                break;
            }
            else if (num >= 0.011 && num < 14.06){
                opScores[i].innerHTML = 2;
                break;
            }
            else if (num >= 14.06 && num < 94.06){
                opScores[i].innerHTML = 3;
                break;
            }
            else if (num >= 94.06 && num < 99.06){
                opScores[i].innerHTML = 4;
                break;
            }
            else {
                opScores[i].innerHTML = 5;
                break;
            }
        }
        else if (opScores[i].innerHTML == 0 && lst[i].innerHTML == 4) {
            let num = Math.round(Math.random()*10000)/100;
            if (num < 1.1){
                opScores[i].innerHTML = 2;
                break;
            }
            else if (num >= 1.1 && num < 15.56){
                opScores[i].innerHTML = 3;
                break;
            }
            else if (num >= 15.56 && num < 94.56){
                opScores[i].innerHTML = 4;
                break;
            }
            else if (num >= 94.56 && num < 99.06){
                opScores[i].innerHTML = 5;
                break;
            }
            else {
                opScores[i].innerHTML = 6;
                break;
            }
        }
        else if (opScores[i].innerHTML == 0 && lst[i].innerHTML == 5) {
            let num = Math.round(Math.random()*10000)/100;
            if (num < 1.6){
                opScores[i].innerHTML = 3;
                break;
            }
            else if (num >= 1.6 && num < 16.65){
                opScores[i].innerHTML = 4;
                break;
            }
            else if (num >= 16.65 && num < 94.65){
                opScores[i].innerHTML = 5;
                break;
            }
            else if (num >= 94.65 && num < 98.65){
                opScores[i].innerHTML = 6;
                break;
            }
            else {
                opScores[i].innerHTML = 7;
                break;
            }
        }
    }
    let num1 = 0;
    let num2 = 0;
    for (i = 0; i < 9; i++){
        num1 += Number(opScores[i].innerHTML);
    }
    for (i = 9; i < 18; i++){
        num2 += Number(opScores[i].innerHTML);
    }
    frontOpScore.innerHTML = String(num1);
    opScore.innerHTML = String(num2);
}