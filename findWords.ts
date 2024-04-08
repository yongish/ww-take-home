// findWords.ts

/**
 * Function to find words from the dictionary that can be formed by rearranging some or all of the letters in the input string.
 * @param inputString The input string to find words from.
 * @param dictionary An array of words to search from.
 * @returns An array of words from the dictionary that can be formed from the input string.
 */
function findWords(inputString: string, dictionary: string[]): string[] {
  const inputLetters = inputString.split('').sort().join(''); // Sort input letters alphabetically for comparison

  return dictionary.filter(word => {
      const sortedWord = word.split('').sort().join(''); // Sort each word in the dictionary alphabetically for comparison
      return inputLetters.includes(sortedWord);
  });
}

export default findWords;
