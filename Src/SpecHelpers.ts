/// <reference path="../src/Bowling.ts" />
module SpecHelpers {
    export var rollMany = (game: IGame, rolls: number, result: number) => {
        var i: number;
        for (i = 0; i < rolls; i = i + 1) {
            game.roll(result);
        }
    }

    export var rollStrike = (game: IGame) => {
        var i: number;
        game.roll(10);
    }

    export var rollSpare = (game: IGame) => {
        var i: number;
        game.roll(5);
        game.roll(5);
    }
}