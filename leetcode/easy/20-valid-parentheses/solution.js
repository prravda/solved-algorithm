function isValid(s) {
  if (s.length % 2 !== 0 || s[0] === ']' || s[0] === '}' || s[0] === ')') {
    return false;
  }

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
      continue;
    }
    if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
      stack.push(s[i]);
      continue;
    }
    if (s[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
      continue;
    }
    if (s[i] === '}' && stack[stack.length - 1] === '{') {
      stack.pop();
      continue;
    }
    if (s[i] === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
      continue;
    }
    return false;
  }

  return stack.length === 0;
}
