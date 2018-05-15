const assert = require('assert');
const Player = require ('../player.js');
const Card = require ('../card.js');

describe ('Player', function(){

  let player;
  let card1;
  let card2;

  beforeEach(function () {
    player = new Player('Michelle');
    card1 = new Card('Superman', 6, 9, 7);
    card2 = new Card('Batman', 7, 10, 5);
  });

  it('should have a name', function(){
    const actual = player.name;
    assert.strictEqual(actual, 'Michelle');
  });

  it('should have an empty hand', function () {
    const actual = player.hand;
    assert.deepStrictEqual(actual, []);
    assert.strictEqual(player.hand.length, 0);
  });

  it('should add card to hand', function () {
    player.addCard(card1)
    const actual = player.hand.length;
    assert.strictEqual(actual, 1);
  });

  it('should add many cards to hand', function (){
    let deck = [card1, card2];
    player.addHand(deck);
    const actual = player.hand.length;
    assert.strictEqual(actual, 2);
  });

});
