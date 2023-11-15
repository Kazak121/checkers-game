export class Piece {
    player_m;

    constructor(playerIndex) {
        this.player = playerIndex;
    }
    get name() {
        return this.constructor.name;
    }
    set player(value) {
        this.player_m = value;
    }
    get player() {
        return this.player_m;
    }
    set playerIndex(value) {
        this.player_m = value;
    }
    get playerIndex() {
        return this.player_m;
    }
}