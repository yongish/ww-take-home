/**
 * Function to find words from the dictionary that can be formed by rearranging some or all of the letters in the input string.
 * @param inputString The input string to find words from.
 * @param dictionary An array of words to search from.
 * @returns An array of words from the dictionary that can be formed from the input string.
 */
function findWords(inputString: string, dictionary: string[]): string[] {
  const inputLettersMap: { [letter: string]: number } = {};

  // Create a map of input letters with their counts
  for (const letter of inputString) {
    if (inputLettersMap.hasOwnProperty(letter)) {
      inputLettersMap[letter]++;
    } else {
      inputLettersMap[letter] = 1;
    }
  }

  const addedWords: string[] = [];

  for (const word of dictionary) {
    // Check if the word is already in the addedWords array
    if (addedWords.includes(word)) continue;

    const wordLettersMap: { [letter: string]: number } = { ...inputLettersMap };

    // Check if the word can be formed from the input letters
    let validWord = true;
    for (const letter of word) {
      if (
        !wordLettersMap.hasOwnProperty(letter) ||
        wordLettersMap[letter] === 0
      ) {
        validWord = false;
        break;
      } else {
        wordLettersMap[letter]--;
      }
    }

    if (validWord) {
      addedWords.push(word); // Add word to the array
    }
  }

  return addedWords;
}

export default findWords;
