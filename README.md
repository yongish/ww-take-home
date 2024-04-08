# Find Words from Dictionary

## Description
This function `findWords` takes an input string and a dictionary of words. It returns an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string. Each letter in the input string may be used up to once per word.

## High-level Approach
1. Split the input string into individual characters, sort them alphabetically, and then join them back into a string. This step ensures that the letters are sorted for comparison.
2. Iterate through each word in the dictionary.
3. For each word, split it into individual characters, sort them alphabetically, and then join them back into a string.
4. Check if the sorted word is a substring of the sorted input string.
5. If the sorted word is a substring of the input string, it means the word can be formed using some or all of the letters from the input string, so it is included in the result array.
6. Return the array of words formed from the input string.

## Test Cases
- Test Case 1:
  - Input: `"ate"`, `["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]`
  - Expected Output: `["ate", "eat", "tea"]`
- Test Case 2:
  - Input: `"oogd"`, `["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]`
  - Expected Output: `["dog", "do", "god", "goo", "go", "good"]`

## Additional Test Cases (if time permits)
- Test Case 3:
  - Input: `"t"` (single character), `["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]`
  - Expected Output: `["tea", "god", "go"]`
- Test Case 4:
  - Input: `"dog"`, `["dog", "cat", "god", "god"]` (repeated letters in input string and dictionary)
  - Expected Output: `["dog", "god"]`
