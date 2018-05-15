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


});
