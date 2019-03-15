/*
https://leetcode.com/problems/zigzag-conversion/

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
*/

export const convert = (str: string, numRows: number): string => {
  if (numRows === 0) return str;
  const buckets: string[] = [];
  for (var i = 0; i < numRows; i++) buckets.push('');
  let bucketDelta = -1;
  let bucketIdx = 0;
  for (var i = 0; i < str.length; i++) {
    const letter = str[i];
    buckets[bucketIdx] += letter;
    if (bucketIdx === numRows - 1 || bucketIdx === 0) {
      bucketDelta *= -1;
    }
    bucketIdx += bucketDelta;
  }
  return buckets.reduce((acc, curr) => acc + curr);
};
