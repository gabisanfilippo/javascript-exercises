function maskify(string) {
  let lengthString = string.length;
  let lengthCharactersToMask = lengthString - 4
  let charactersWithoutMask = string.substring(lengthCharactersToMask, lengthString);
  let mask = ''
  for (let i = 0; i < lengthCharactersToMask; i++){
    mask = mask + '#'
  }
  mask = mask + charactersWithoutMask;
  return mask
}
console.log(maskify("Nanananananananananana Batman!"));
module.exports = maskify;