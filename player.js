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



module.exports = Player;
