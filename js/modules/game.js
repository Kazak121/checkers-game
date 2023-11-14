export class Game {
  player1_m = null;
  player2_m = null;

  constructor(modules) {
    this.board = modules.board;
  }
  addPlayer(player)
  {
    if (this.player1_m == null) this.player1_m = player;
    else if (this.player2_m == null) this.player2_m = player;
    else throw new Error('The game already has two players.');
  }
 

  init() {
    this.board.initBoard();
  }
}
