/*
https://leetcode.com/problems/generate-parentheses/
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

var generateParenthesis = (
  n,
  result = [],
  parens = '',
  numOpen = 0,
  numClosed = 0
) => {
  if (n === numClosed) {
    result.push(parens);
    return;
  }
  if (numOpen === numClosed) {
    generateParenthesis(n, result, parens + '(', numOpen + 1, numClosed);
  } else if (numOpen === n) {
    generateParenthesis(n, result, parens + ')', numOpen, numClosed + 1);
  } else {
    generateParenthesis(n, result, parens + ')', numOpen, numClosed + 1);
    generateParenthesis(n, result, parens + '(', numOpen + 1, numClosed);
  }
  return result;
};
