function chechPalindrome(str) {
  str = str.toLowerCase();
  const length = str.length;
  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return "This is not Polindrome";
    }
  }
  return 'This is Polindrome';
}


console.log(chechPalindrome("Sator Arepo tenet opera rotas"));


// For optimal code:
// Half indexing (length / 2) has advantages when checking large strings. We check the end of each section and divide the number of repetitions in the FOR loop by two.
