export class Board {
  //boardRef = null;
  #fieldsList = [
    ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'], 
    ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'], 
    ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29'], 
    ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39'], 
    ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49'], 
    ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59'], 
    ['60', '61', '62', '63', '64', '65', '66', '67', '68', '69'], 
    ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79'], 
    ['80', '81', '82', '83', '84', '85', '86', '87', '88', '89'], 
    ['90', '91', '92', '93', '94', '95', '96', '97', '98', '99']
  ];
  constructor(boardRef) {
    this.boardRef = boardRef;
  }

  get fieldsList() {
    const fieldsList = this.#fieldsList.map(row => {
      return Object.freeze([...row]);
    });
    return Object.freeze([...fieldsList]);
  }

  static getDefaultPiece() {
    return Field.getDefaultPiece();
  }

  init() {
    for (let i=0; i < this.#fieldsList.length; i++) {
      for (let j=0; j < this.#fieldsList.length; j++) {
        const field = this.getField(i + '' + j);
        if (!(field instanceof Field)) {
          this.setField('${i}${j}', new Field())
        }
      }
    }
  }

  get Field = function (coord) {
    if (!this.#isCorrectCoord(coord)) {
      throw new Error('Incorrect coords');
    }
    const [rowIndex, colIndex] = coords;
    return this.#fieldsList[rowIndex][colIndex];
  }

  setField = function (coord, value) {
    if (!this.#isCorrectCoord(coord)) {
      throw new Error('Incorrect coords');
    }
    const [rowIndex, colIndex] = coord;
    this.#fieldsList[rowIndex][colIndex] = value;
  }

  insertPieces(pieces, playerIndex) {
    const coords = Object.keys(pieces);
    coords.forEach(coord => {
      const piece = pieces[coords];
      piece.player = playerIndex;
      this.setField(coord, Field.factory(piece));
    })
  }

  initBoard() {
    this.createBoard();
    console.log("Board initialized");
  }

/*  createBoard() {
    const boardGrid = document.createElement("div");
    boardGrid.id = "board";

    // Loop to create 100 divs for the 10x10 board
    for (let i = 0; i < 100; i++) {
      const square = document.createElement("div");
      boardGrid.appendChild(square);
    }

    this.boardRef.appendChild(boardGrid);
  } */

  #isCorrectCoord = function (coord) {
    return /^[0-9]{2}$/i.test(coord);
  }
}
