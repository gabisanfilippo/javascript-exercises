function checkIfTheFirstLetterIsUppercase(word) {
  const hasUpper = (string) => /[A-Z]/.test(string);
  return hasUpper(word[0]);
}

module.exports = checkIfTheFirstLetterIsUppercase;