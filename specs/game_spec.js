const assert = require('assert');
const Game = require('../game.js');
const Player = require ('../player.js');
const Card = require ('../card.js');

describe ('Game', function(){

  let game;
  let player1;
  let player2;
  let card1;
  let card2;
  let deck;

  beforeEach(function () {   //REMEMBER: ORDER MATTERS (AGAIN)
    player1 = new Player('Michelle');
    player2 = new Player('Claire');
    card1 = new Card('Superman', 6, 9, 7);
    card2 = new Card('Batman', 7, 10, 5);
    deck = [card1, card2];
    game = new Game (player1, player2, deck);

  });

  it('should get player1', function (){
    const actual = game.player1.name;
    assert.strictEqual(actual, 'Michelle');
  });

  it('should get player2', function (){
    const actual = game.player2.name;
    assert.strictEqual(actual, 'Claire');
  });

  it('should have deck', function () {
    const actual = game.deck.length;
    assert.strictEqual(actual, 2)
  });



  });
