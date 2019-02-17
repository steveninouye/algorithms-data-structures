const findMedianSortedArrays = require('./median_of_two_sorted_arrays');

describe('#findMedianSortedArrays', () => {
  it('should return the element in the middle of an odd amount of elements', () => {
    const arr1 = [4, 5];
    const arr2 = [1];
    expect(findMedianSortedArrays(arr1, arr2)).toBe(4);
  });

  it('should return the element in the middle of an odd amount of elements', () => {
    const arr1 = [4, 5];
    const arr2 = [4];
    expect(findMedianSortedArrays(arr1, arr2)).toBe(4);
  });

  it('should return the average of the 2 middle elements if there are an even number of elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6, 7, 8];
    expect(findMedianSortedArrays(arr1, arr2)).toBe(4.5);
  });

  it('should return the average of the 2 middle elements if there are an even number of elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 5, 6, 7, 8];
    expect(findMedianSortedArrays(arr1, arr2)).toBe(4);
  });

  it('should return the element in the middle of an odd amount of elements', () => {
    const arr1 = [4, 5];
    const arr2 = [5];
    expect(findMedianSortedArrays(arr1, arr2)).toBe(5);
  });

  it('should return the average of the 2 middle elements if there are an even number of elements', () => {
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [7, 8];
    expect(findMedianSortedArrays(arr1, arr2)).toBe(4.5);
  });

  it('should return the average of the 2 middle elements if there are an even number of elements', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [2, 4, 5, 7];
    expect(findMedianSortedArrays(arr1, arr2)).toBe(3.5);
  });

  it('should return the average of the 2 middle elements if there are an even number of elements', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    expect(findMedianSortedArrays(arr1, arr2)).toBe(2.5);
  });

  it('should return the average of the 2 middle elements if there are an even number of elements', () => {
    const arr1 = [2];
    const arr2 = [1, 3, 4];
    expect(findMedianSortedArrays(arr1, arr2)).toBe(2.5);
  });
});
