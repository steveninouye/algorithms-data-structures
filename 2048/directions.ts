const directions = {
  right: {
    startTile: { row: this.height - 1, col: this.width - 1 },
    tilesDelta: { rowsDelta: -1, colsDelta: 0 },
    tileDelta: { rowDelta: 0, colDelta: -1 }
  },
  down: {
    startTile: { row: this.height - 1, col: 0 },
    tilesDelta: { rowsDelta: 0, colsDelta: 1 },
    tileDelta: { rowDelta: -1, colDelta: 0 }
  },
  up: {
    startTile: { row: 0, col: this.width - 1 },
    tilesDelta: { rowsDelta: 0, colsDelta: -1 },
    tileDelta: { rowDelta: 1, colDelta: 0 }
  },
  left: {
    startTile: { row: 0, col: 0 },
    tilesDelta: { rowsDelta: 1, colsDelta: 0 },
    tileDelta: { rowDelta: 0, colDelta: 1 }
  }
};

export default directions;
