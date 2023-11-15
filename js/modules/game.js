import { Board } from './board.js'
import { Printer } from '.printer.js'
export class Game {
  players_m =[];
  playersNumber_m = 2;
  #board;

  constructor(modules) {
    this.board = modules.board;
  }
  addPlayer(player, pieces = [])
  {
    if (this.playersNumber_m <= this.players_m.length)
      throw new Error('Too many players!');
    this.players_m.push(player);
    const playerIndex = this.players_m.length-1;
    this.#board.insertPieces(pieces, playerIndex);
    return playerIndex;
  }
 

  init() {
    this.board.initBoard();
  }
}
