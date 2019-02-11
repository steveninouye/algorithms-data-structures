/*
https://leetcode.com/problems/count-and-say/
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"
*/

const countAndSay = (n) => {
  if (n < 1) return '';
  if (n === 1) return '1';
  prev = countAndSay(n - 1);
  let result = '';
  let currentNum = prev[0];
  let count = 1;
  for(let i = 1; i < prev.length; i++){
    let num = prev[i]
    if(num !== currentNum) {
      result += `${count}${currentNum}`
      currentNum = num
      count = 1
    } else {
      count++
    }
  }
  return result + `${count}${currentNum}`
};

console.log('output=> ', countAndSay(1));
console.log(countAndSay(1) === '1');
console.log('output=> ', countAndSay(4));
console.log(countAndSay(4) === '1211');
