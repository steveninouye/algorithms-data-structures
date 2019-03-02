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

    it('should not be undefined', () => {
      expect(nullTile.val).not.toBeUndefined();
      expect(tile1.val).not.toBeUndefined();
      expect(tile2.val).not.toBeUndefined();
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
    it('should have a #merge method', () => {});
  });

  describe('#random', () => {
    it('should have a #random method', () => {});
  });
});
