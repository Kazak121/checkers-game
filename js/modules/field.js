export class Field {
    #piece;

    static getDefaultPiece() {
        return new Checker();
    }
}