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

const isValid = (s: string): boolean => {
  let stack = [];
  const map = {
    ']': '[',
    '}': '{',
    ')': '('
  };
  const closeChars = Object.keys(map);
  for (var i = 0; i < s.length; i++) {
    const char = s[i];
    if (closeChars.includes(char) && stack[stack.length - 1] !== map[char]) {
      return false;
    } else if (map[char] && stack[stack.length - 1] === map[char]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return true;
};

console.log(isValid('([)]'));
