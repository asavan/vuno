/**
 * Created by sava on 20.07.2017.
 */
(function() {
    deck.shuffle();
    var pl = [
        Player.createPlayer(1, -700, -250, deck),
        Player.createPlayer(2, -700, 0, deck),
        Player.createPlayer(3, -700, 300, deck)];

    var getCard = function (j) {
        if(j === 5) return;
        setTimeout(function () {
            var i = 0;
            for (i = 0; i < pl.length; ++i) {
                //pl[i].giveOne();
                pl[i].$pl1.click();
            }
            getCard(j+1)
        }, 300);
    }

    setTimeout(function () {
        getCard(0);
    }, 500);
})();




