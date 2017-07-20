'use strict';
var Player = (function () {
    'use strict';
	var giveOneCard = function(player) {
        var c = player.deck.cards;

		var card = c.pop();
        player.cards.push(card);
		card.setSide('front');
        var $el = card.$el;
        var delay = 50;

        card.animateTo({
          delay: delay,
          duration: 250,

          x: player.x + player.cards.length*40,
          y: player.y,
          rot: 0,

          onStart: function onStart() {
            $el.style.zIndex = player.cards.length;
          },
          onComplete: function onComplete() {
              card.$el.addEventListener("click", function() {console.log("click");});
              card.$el.addEventListener("dblclick", function() {console.log("dblclick");});

              console.log(card.$el);
          }
      });


	}

    var createPlayer = function (i, xparam, yparam, deckparam) {
        var player = {};

        player.x = xparam;
        player.y = yparam;
        player.deck = deckparam;
        player.cards = [];
        player.$pl1 = document.createElement('button');
        player.$pl1.textContent = 'pl' + i;
        $topbar.appendChild(player.$pl1);
        player.$pl1.addEventListener('click', function () {
            giveOneCard(player);
        });

        player.giveOne = function() {
            giveOneCard(player);
        };


        return player;
    };


    return {createPlayer : createPlayer};
})();