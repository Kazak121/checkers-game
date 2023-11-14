export class Game {
  players_m =[];
  playersNumber_m = 2;

  constructor(modules) {
    this.board = modules.board;
  }
  addPlayer(player)
  {
    if (this.playersNumber_m <= this.players_m.length)
      throw new Error('Too many players!');
    this.players_m.push(player);
  }
 

  init() {
    this.board.initBoard();
  }
}
