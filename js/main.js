// what can they do
// what do they expect 
// what do they see 

const minBet = 1;
const maxBet = 5;
let wallet = 100;

document.querySelector('#min').addEventListener('click', spinMin);
document.querySelector('#max').addEventListener('click', spinMax);
document.querySelector('#wallet').innerHTML = wallet;


function spinMin() {
    let slot1 = Math.floor(Math.random(5) * (5))
    document.querySelector('#slot1').innerHTML = slot1;
    let slot2 = Math.floor(Math.random(5) * (5))
    document.querySelector('#slot2').innerHTML = slot2;
    let slot3 = Math.floor(Math.random(5) * (5))
    document.querySelector('#slot3').innerHTML = slot3;

    if (slot1 === slot2 && slot2 === slot3) {
        wallet = wallet + (minBet * 2);
        document.querySelector('#wallet').innerText = wallet;
        alert("YAY! You won $2.00!")
    }
    else {
        wallet = wallet - minBet;
        document.querySelector('#wallet').innerText = wallet;
    }
    if (wallet <= 0) {
        alert("OH NO! Your wallet balance is gone.")
    }
}

function spinMax() {
    let slot1 = Math.floor(Math.random(5) * (5))
    document.querySelector('#slot1').innerHTML = slot1;
    let slot2 = Math.floor(Math.random(5) * (5))
    document.querySelector('#slot2').innerHTML = slot2;
    let slot3 = Math.floor(Math.random(5) * (5))
    document.querySelector('#slot3').innerHTML = slot3;

    if (slot1 === slot2 && slot2 === slot3) {
        wallet = wallet + (maxBet * 1.5);
        document.querySelector('#wallet').innerText = wallet;
        alert("YAY! You won $7.50!")
    }
    else {
        wallet = wallet - maxBet;
        document.querySelector('#wallet').innerText = wallet;
    }
    if (wallet <= 0) {
        alert("OH NO! Your wallet balance is gone.")
    }
}
