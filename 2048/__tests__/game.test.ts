import Game from "../game";

describe('Game', () => {
  it('should be defined', () => {

  })
  
  it('should initialize with new board', () => {

  })

  describe('#run', () => {
    it('should start the game', () => {

    })
  })

  describe('#render', () => {
    it('should render the board', () => {

    })
  })

  describe('#shiftBoard', () => {
    it('should pass board the direction input by the player')
  })

  describe('#get direction', () => {
    it('should prompt the user for a direction', () => {

    })

    it('should return a direction', () => {
      expect(["right", "left", "down", "up"]).toContain("right") // TODO: CHANGE ME!!!!!!!
    })

    it('should accept _______________ as inputs', () => {

    })

    it('should NOT accept ____________________ as inputs', () => {

    })
  })

  describe("#gameOver", () => {
    it('should be true when board is full AND no pieces can move', () => {

    })

    it('should not be true when pieces can move', () => {

    })

    it("when spaces are available on the board", () => {

    })
  })
})