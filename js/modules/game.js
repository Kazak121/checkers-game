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
