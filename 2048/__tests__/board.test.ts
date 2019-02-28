import Board from "../board";

describe('Board', () => {
  it('should be defined', () => {
    expect(Board).toBeDefined()
  })

  describe('init', () => {
    it('should receive a board size', () => {

    })

    it('should should assign matrix as a "size x size" grid', () => {

    })

    it('should initialize score to 0', () => {

    })
  })

  describe('#moveTiles', () => {
    it('should receive a direction', () => {

    })

    it('should change the matrix on Board after completion', () => {

    })

    it('should return the new total score', () => {

    })

    it('should throw error if no move was made', () => {
      
    })
  })

  describe("#getAvailablePostions", () => {
    it('should return all the available positions with x and y coordinates', () => {

    })
  })

  describe('#getAvailableMoves', () => {
    it('should return all the valid available moves', () => {

    })
  })
})