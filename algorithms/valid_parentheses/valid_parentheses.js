/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

const isValid = (s) => {
  let mapClose = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let ltr = s[i];
    if (mapClose[ltr]) {
      if (stack.length === 0 || stack.pop() !== mapClose[ltr]) {
        return false;
      }
    } else {
      stack.push(ltr);
    }
  }
  return stack.length === 0;
};

console.log(isValid('([)]'));
