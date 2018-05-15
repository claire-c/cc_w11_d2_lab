const Player = function (name) {
  this.name = name;
  this.hand = [];
};

Player.prototype.addCard = function (card) {
  this.hand.push(card);
};

Player.prototype.addHand = function (deck) {
  this.hand = deck;
}

Player.prototype.selectCategory = function(){
  let card = this.hand.shift();
  let cardValues = [card.intelligence, card.strength, card.agility];
  let highestCardValue = 0;
  for (trump of cardValues){
    if( trump > highestCardValue )
    highestCardValue = trump;
    }
  return highestCardValue;
}



module.exports = Player;
