function prefix(words) {
  // check border cases size 1 array and empty first word)
  if (!words[0] || words.length == 1) return false;
  let i = 0;
  // while all words have the same character at position i, increment i
  while (words[0][i] && words.every((word) => word[i] === words[0][i])) i++;
  // if i does not incremet , that means there are not same prefixes
  if (i === 0) return false;
  // prefix is the substring from the beginning to the last successfully checked i
  return words[0].substr(0, i);
}

words = ["alma", "albali", "alca"];
words2 = ["alma", "muellim", "sagird"];
console.log(prefix(words));
