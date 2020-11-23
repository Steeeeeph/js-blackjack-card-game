const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

function drawRandomCard(deck) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];   
}     
console.log (drawRandomCard(deck));

let playerHand;
let dealerHand;

function startGame(){
    playerHand = [drawRandomCard(deck), drawRandomCard(deck)];
    dealerHand = [drawRandomCard(deck), drawRandomCard(deck)];

}
function getHandValue(hand) {
    let sum = 0;
    for (var i=0; i<hand.length; i++) {
    sum += hand[i];
    }
    return sum;
}
startGame();
// console.log('player hand: '+ playerHand);
// console.log ('player hand value '+ getHandValue(playerHand));
// console.log ('dealer hand value '+ getHandValue(dealerHand));
// console.log('dealer hand: '+ dealerHand);

function hit() {
    playerHand.push(drawRandomCard(deck));
    console.log('new player hand: '+ playerHand)
    if(getHandValue(playerHand)> 21) {
        document.getElementById("game-status").innerHTML = 'BUSTED!';
    }
}

document.getElementById("player-hand").innerHTML = playerHand;
document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand);
document.getElementById("dealer-hand").innerHTML = dealerHand;
document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);
