var Bowling;
(function (Bowling) {
    var Game = (function () {
        function Game() {
            this._frames = 10;
            this._currentRoll = 0;
            this._rolls = new Array();
            for(var i = 0; i < 21; i++) {
                this._rolls.push(0);
            }
        }
        Game.prototype.roll = function (pins) {
            this._rolls[this._currentRoll] = pins;
            this._currentRoll++;
        };
        Game.prototype.score = function () {
            var _score = 0;
            var frameindex = 0;
            for(var frame = 0; frame < this._frames; frame++) {
                if(this.isStrike(frameindex)) {
                    _score += this.strikeBonus(frameindex);
                    frameindex++;
                } else {
                    if(this.isSpare(frameindex)) {
                        _score += this.spareBonus(frameindex);
                        frameindex = frameindex + 2;
                    } else {
                        _score += this.sumOfBallsInFrame(frameindex);
                        frameindex = frameindex + 2;
                    }
                }
            }
            return _score;
        };
        Game.prototype.isSpare = function (roll) {
            return (this._rolls[roll] + this._rolls[roll + 1]) === 10;
        };
        Game.prototype.isStrike = function (roll) {
            return this._rolls[roll] === 10;
        };
        Game.prototype.sumOfBallsInFrame = function (roll) {
            return this._rolls[roll] + this._rolls[roll + 1];
        };
        Game.prototype.spareBonus = function (roll) {
            return 10 + this._rolls[roll + 2];
        };
        Game.prototype.strikeBonus = function (roll) {
            return 10 + this._rolls[roll + 1] + this._rolls[roll + 2];
        };
        return Game;
    })();
    Bowling.Game = Game;    
})(Bowling || (Bowling = {}));

var b;
b = new Bowling.Game();
