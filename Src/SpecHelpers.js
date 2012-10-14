var SpecHelpers;
(function (SpecHelpers) {
    SpecHelpers.rollMany = function (game, rolls, result) {
        var i;
        for(i = 0; i < rolls; i = i + 1) {
            game.roll(result);
        }
    };
    SpecHelpers.rollStrike = function (game) {
        var i;
        game.roll(10);
    };
    SpecHelpers.rollSpare = function (game) {
        var i;
        game.roll(5);
        game.roll(5);
    };
})(SpecHelpers || (SpecHelpers = {}));

