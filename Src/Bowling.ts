// Interface
interface IGame {
    roll(pins:number);
    score() : number;
}

// Module
module Bowling {

    // Class
    export class Game implements IGame {
        // Constructor
        _rolls : number[];
        _currentRoll: number;
        _frames: number = 10;
        constructor () {
            this._currentRoll = 0;
            this._rolls = new Array();
            for (var i: number = 0; i < 21; i++) {
                this._rolls.push(0);
            }
        }

        // Instance member
        roll(pins: number) { 
            this._rolls[this._currentRoll] = pins;
            this._currentRoll++;
        }
        score(): number {
            var _score: number = 0;
            var frameindex:number = 0;
            for (var frame: number = 0; frame < this._frames; frame++) {
                if (this.isStrike(frameindex)) {
                    _score += this.strikeBonus(frameindex);
                    frameindex++;
                }
                else if (this.isSpare(frameindex)) {
                    _score += this.spareBonus(frameindex);
                    frameindex = frameindex + 2;
                }
                else {
                    _score += this.sumOfBallsInFrame(frameindex);
                    frameindex = frameindex + 2;
                }
            }
            return _score;
        }
        isSpare(roll: number):bool {
            return (this._rolls[roll] + this._rolls[roll + 1]) === 10;
        }
        isStrike(roll: number):bool {
            return this._rolls[roll] === 10;
        }
        sumOfBallsInFrame(roll: number):number {
            return this._rolls[roll] + this._rolls[roll + 1];
        }
        spareBonus(roll: number):number {
            return 10 + this._rolls[roll + 2];
        }
        strikeBonus(roll: number):number {
            return 10 + this._rolls[roll + 1]+ this._rolls[roll + 2];
        }
    }   
}

var b: Bowling.Game;
b = new Bowling.Game();

