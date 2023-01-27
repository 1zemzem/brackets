module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) {
    return false;
  }

  let brackets = {};
  let stack = [];

  for (let el of bracketsConfig) {
    let open = el[0];
    let close = el[1];
    brackets[close] = open;
  }

  for (let i = 0; i < str.length; i++) {
    if (
      brackets[str[i]] === stack[stack.length - 1] &&
      brackets[str[i]] != undefined
    )
      stack.pop();
    else stack.push(str[i]);
  }
  return !stack.length;
};
