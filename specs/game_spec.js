const assert = require('assert');
const Game = require('../game.js');
const Player = require ('../player.js');
const Card = require ('../card.js');

describe ('Game', function(){

  let game;
  let player1;
  let player2;

  beforeEach(function () {   //REMEMBER: ORDER MATTERS (AGAIN)
    player1 = new Player('Michelle');
    player2 = new Player('Claire');
    game = new Game (player1, player2);

  });

  it('should get player1', function (){
    const actual = game.player1.name;
    assert.strictEqual(actual, 'Michelle');
  });

  it('should get player2', function (){
    const actual = game.player2.name;
    assert.strictEqual(actual, 'Claire');
  });

  });
