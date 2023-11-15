import { Game } from "./modules/game.js";
import { Board } from "./modules/board.js";
import { Player } from '.modules.player.js';
import { CheckersDOMPrinter } from './modules/printer.js'

document.addEventListener("DOMContentLoaded", function () {
  const appContainerRef = document.getElementById("app");

  if (!appContainerRef) {
    throw new Error("App container not found!");
  }

  const board = new Board();
  const printer = new CheckersDOMPrinter({ appContainerRef });
  const game = new Game({ board, printer });

  const player_1 = new Player('P1');
  const player_2 = new Player('P2');

  game.addPlayer(player_1, Game.getStartingPositionForWhite());
  game.addPlayer(player_2, Game.getStartingPositionForBlack());

  game.init();
});
