import Tile from '../tile';

describe('Tile', () => {
  let nullTile: Tile;
  let tile1: Tile;
  let tile2: Tile;

  beforeAll(() => {
    nullTile = new Tile();
    tile1 = new Tile(1);
    tile2 = new Tile(2);
  });

  it('should be defined', () => {
    expect(Tile).toBeDefined();
  });

  describe('#val', () => {
    it('should have a val property', () => {
      expect(nullTile.val).toBeDefined();
      expect(tile1.val).toBeDefined();
      expect(tile2.val).toBeDefined();
    });

    it('should default to null', () => {
      expect(nullTile.val).toBeNull();
    });

    it('should be type number', () => {
      expect(typeof tile1.val).toBe('number');
      expect(typeof tile2.val).toBe('number');
    });

    it('should be able to be assigned', () => {
      expect(tile1.val).toBe(1);
      expect(tile2.val).toBe(2);
    });
  });

  describe('#merge', () => {
    it('should have a #merge method', () => {
      expect(nullTile.merge).toBeDefined();
      expect(tile1.merge).toBeDefined();
      expect(tile2.merge).toBeDefined();
    });

    let tile3, tile4;

    beforeEach(() => {
      tile3 = new Tile(4);
      tile4 = new Tile(4);
    });

    it('should assign val to val of tile passed in if own val is null', () => {
      nullTile.merge(tile3);
      expect(nullTile.val).toBe(4);
    });

    it('should should double val if both tiles val equal', () => {
      tile3.merge(tile4);
      expect(tile3.val).toBe(8);
    });

    it('should assign null to tile passed in', () => {
      tile3.merge(tile4);
      expect(tile4.val).toBeNull();
    });

    describe('Errors', () => {
      it("should throw an error if tile's val does not equal null OR val does not match val of tile passed in", () => {
        expect(() => tile1.merge(tile2)).toThrowError();
      });

      it('should not assign val of tile passed in to null if there is an error', () => {
        expect(tile1.val).toBe(1);
        expect(tile2.val).toBe(2);
      });
    });
  });

  describe('#random', () => {
    it('should have a #random method', () => {
      expect(nullTile.random).toBeDefined();
      expect(tile1.random).toBeDefined();
      expect(tile2.random).toBeDefined();
    });

    let tiles = [];

    beforeEach(() => {
      for (let i = 0; i < 100; i++) {
        let tile = new Tile();
        let result = tile.random();
        let { val } = tile;
        tiles.push({ val, result });
      }
    });

    it('should assign its val to 2 or 4 when called', () => {
      let badTiles = tiles.filter(({ val }) => val !== 4 && val !== 2);
      expect(badTiles).toHaveLength(0);
    });

    it('should return its val when called', () => {
      let badTiles = tiles.filter(({ result }) => result !== 4 && result !== 2);
      expect(badTiles).toHaveLength(0);
    });

    describe('Errors', () => {
      let tile: Tile;

      beforeAll(() => {
        tile = new Tile(16);
      });
      it('should throw an error if tile has a val', () => {
        expect(() => tile.random()).toThrowError();
      });

      it('should not reassign its val', () => {
        expect(tile.val).toBe(16);
      });
    });
  });
});
