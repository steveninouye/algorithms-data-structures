const directions = {
  right: {
    startTile: { row: this.height - 1, col: this.width - 1 },
    tilesDelta: { row: -1, col: 0 },
    tileDelta: { row: 0, col: -1 }
  },
  down: {
    startTile: { row: this.height - 1, col: 0 },
    tilesDelta: { row: 0, col: 1 },
    tileDelta: { row: -1, col: 0 }
  },
  up: {
    startTile: { row: 0, col: this.width - 1 },
    tilesDelta: { row: 0, col: -1 },
    tileDelta: { row: 1, col: 0 }
  },
  left: {
    startTile: { row: 0, col: 0 },
    tilesDelta: { row: 1, col: 0 },
    tileDelta: { row: 0, col: 1 }
  }
};

export default directions;
