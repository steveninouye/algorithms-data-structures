const findMedianSortedArrays = require('./median_of_two_sorted_arrays');

describe('#findMedianSortedArrays', () => {
  it('should return the element in the middle of an odd amount of elements', () => {
    const arr1 = [1, 3];
    const arr2 = [2];
    expect(findMedianSortedArrays(arr1, arr2)).toBe(2);
  });
  it('should return the average of the 2 middle elements if there are an even number of elements', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    expect(findMedianSortedArrays(arr1, arr2)).toBe(2.5);
  });
});
