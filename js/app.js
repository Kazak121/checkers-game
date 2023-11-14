import { Game } from "./modules/game.js";
import { Board } from "./modules/board.js";
import { Player } from '.modules.player.js';

document.addEventListener("DOMContentLoaded", function () {
  const appContainerRef = document.getElementById("app");

  if (!appContainerRef) {
    throw new Error("App container not found!");
  }

  const board = new Board(appContainerRef);
  const game = new Game({ board });

  const player_1 = new Player('P1');
  const player_2 = new Player('P2');

  game.addPlayer(player_1, Game.getStartingPositionForWhite());

  game.init();
});
