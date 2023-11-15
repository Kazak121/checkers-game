import { Board } from './board.js'
import { Printer } from '.printer.js'
export class Game {
  modules_m
  players_m = [];
  playersMinimum_m = 0;
  playersLimit_m = 0;

  addPlayer(player) {
    if (this.playersLimit_m <= this.players_m.length) {
      throw new Error('Too many players!');
    }
    this.players_m.push(player);
  }
  
  Init() {
    if (this.playersMinimum_m > this.players_m.length || this.playersLimit_m < this.players_m.length) {
      throw new Error('Players number problem!');
    }
  }

  move() {
    throw new Error('Implement this method');
  }
}

export class CheckersGame extends Game {
  playersMinimum_m = 2;
  playersLimit_m = 2;
  #board;
  #printer;
  #moves = [];

  static getStartingPositionForBlack(boardSize = 10, rowsCount = 4) {
    const coords = {};
    for (let i = 0; i < rowsCount; i++) {
      for (let j = 0; j < boardSize; j++) {
        if ((i+j) % 2 == 1) {
          coords['${i}${j}'] = Board.getDefaultPiece()
        }
      }
    }
    return coords;
  }

  static getStartingPositionForWhite(boardSize = 10, rowsCount = 4) {
    const coords = {};
    for (let i = boardSize - rowsCount; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        if ((i+j) % 2 == 1) {
          coords['${i}${j}'] = Board.getDefaultPiece()
        }
      }
    }
    return coords;
  }

  constructor({ boards, printer }) {
    super();

    if (!(board instanceof Board)) {
      throw new Error('Invalid argument type!');
    }
    this.#board = board;

    if(!(printer instanceof Printer )) {
      throw new Error('Invali argument type!');
    }
    this.#printer = printerl
  }

  init() {
    super.init();
    this.#board.init();
    this.#printer.init({boardData: this.#board.fieldsList })
  }

  addPlayer(player, pieces = []) {
    super.addPlayer(player);
    const playerIndex = this.players_m.length-1;
    this.#insertPiecesOnBoard(pieces, playerIndex);
    return playerIndex;
  }

  getActivePlayer() {
    return this.players_m[this.#getActivePlayerIndex()];
  }

  /*getLastActivePlayer() {
    return this.players_m[this.#getLastActivePlayerIndex()];
  } */ 
  #insertPiecesOnBoard(pieces, plyerIndex) {
    this.#board.insertPieces(pieces, playerIndex);
  }
  
  #getActivePlayerIndex() {
    return this.#moves.length % this.players_m.length;
  }

  #getLastActivePlayerIndex() {
    return (this.#moves.length - 1) % this.players_m.length;
  }
}
