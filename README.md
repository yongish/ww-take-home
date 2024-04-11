# Find Words from Dictionary

## Description
This function `findWords` takes an input string and a dictionary of words. It returns an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string. Each letter in the input string may be used up to once per word.

## High-level Approach
1. Create a map of the input letters with their counts to keep track of available letters.
2. Create a set to keep track of added words.
3. Iterate through each word in the dictionary.
4. Check for duplicate. If the word has already been added to the result, skip to the next word.
5. For each word, create a copy of the input letters map.
6. Check if the word can be formed using the available letters from the input string.
7. If the word can be formed, add it to the result set.
8. Return an array containing unique words formed from the input string.

## Test Cases

```javascript
console.log(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["ate", "eat", "tea"]

console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "dog", "goo", "go"]

console.log(findWords("dog", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "god", "go"]

console.log(findWords('ddggo', ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "god", "go"]

// Duplicate dictionary words.
console.log(findWords("dog", ["ate", "eat", "tea", "dog", "cat", "god", "god"]));
// Expected output: ["dog", "god"]

// Empty case.
console.log(findWords("", []));
// Expected output: []

// Empty input.
console.log(findWords("", ["cat", "dog", "ate"]));
// Expected output: []

// Empty dictionary.
console.log(findWords("dog", []));
// Expected output: []

// Single character input.
console.log(findWords("t", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: []

// Input has special characters.
console.log(findWords("&^$#@", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: []

// Input with numbers.
console.log(findWords("12345", ["123", "456", "345"]));
// Expected output: ["123", "345"]
```
