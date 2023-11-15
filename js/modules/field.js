export class Field {
    #piece;

    constructor(piece = null) {
        this.piece = piece;
    }
    static factory(...params) {
        return new Field(...params);
    }
    static getDefaultPiece() {
        return new Checker();
    }
    set piece(obj) {
        if (!obj instanceof Piece)
            throw new Error('Incorrect argument')
        this.#piece = obj;
    }
    get piece() {
        return this.#piece;
    }
    isEmpty() {
        return !this.piece;
    }
    setEmpty() {
        this.piece = null;
    }
}