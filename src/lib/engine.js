import {Game} from 'js-chess-engine'

export class ChessGame {
    constructor(fen) {
        this.game = new Game(fen);
    }
    move(from,to) {
        this.game.move(from,to);
    }
    getFen() {
        return this.game.exportFEN();
    }
}