/// <reference path="../modules/Jasmine.d.ts" />
/// <reference path="../src/Bowling.ts" />
/// <reference path="../src/SpecHelpers.ts" />

describe("Bowling game", function () {

    describe("when all balls goes into gutter", function () {
        var game;

        beforeEach(function () {
            game = new Bowling.Game();
        });

        it("the score should be zero", function () {
            SpecHelpers.rollMany(game, 20, 0);
            expect(game.score()).toEqual(0);

        });
    });
    describe("when all balls knock down one pin", function () {
        var game;

        beforeEach(function () {
            game = new Bowling.Game();
        });

        it("the score should be 20", function () {
            SpecHelpers.rollMany(game, 20, 1);
            expect(game.score()).toEqual(20);

        });
    });
    describe("when first frame is a spare and second frame starts with 3 rest is gutter balls", function () {
        var game;

        beforeEach(function () {
            game = new Bowling.Game();
        });

        it("the score should be 16", function () {
            SpecHelpers.rollSpare(game);
            game.roll(3);
            SpecHelpers.rollMany(game, 17, 0);
            expect(game.score()).toEqual(16);

        });
    });
    describe("when first frame is a strike and second frame starts with 3 and ends with 4 rest is gutter balls", function () {
        var game;

        beforeEach(function () {
            game = new Bowling.Game();
        });

        it("the score should be 24", function () {
            SpecHelpers.rollStrike(game);
            game.roll(3);
            game.roll(4);
            SpecHelpers.rollMany(game, 16, 0);
            expect(game.score()).toEqual(24);
        });
    });
    describe("when perfect game", function () {
        var game;

        beforeEach(function () {
            game = new Bowling.Game();
        });

        it("the score should be 300", function () {
            SpecHelpers.rollMany(game, 12, 10);
            expect(game.score()).toEqual(300);
        });
    });
});