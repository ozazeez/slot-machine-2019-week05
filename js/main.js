const minBet = 5;
const maxBet = 25;
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

    }
    else {
        wallet = wallet - minBet;
        document.querySelector('#wallet').innerText = wallet;
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
        wallet = wallet + (maxBet * 2);
        document.querySelector('#wallet').innerText = wallet;
    }
    else {
        wallet = wallet - maxBet;
        document.querySelector('#wallet').innerText = wallet;
    }

}



