export class Printer {
    init(settings) {
        this.#throwError();
    }
    renderBoard(data) {
        this.#throwError();
    }
    #throwError(messssage = 'Implement this method') {
        throw new Error(message)
    }
}