# String Compression

When there is a string repetition, we change a string into “repetition number + string”.

For example, “aabbaccc” will become “2a2ba3c”.

However, in many cases, dividing by 1 character is not really efficient. For example, “ababcdcdababcdcd” cannot be compressed if it is divided by 1 character, but if it is divided by 2 characters, it becomes “2ab2cd2ab2cd”.
If it is divided by 8 characters, it becomes “2ababcdcd” and it is the shortest way to compress it.

Let’s see an example, “abcabcdede”.
2 characters: “abcabc2de”
3 characters: “2abcdede”, When it is divided by 3 characters, you can append leftover characters to the end of the result string. In this case “e” is the leftover string.

Make a function to return the length of the shortest compressed string when the given string s is compressed by one or more 1 characters as described above.

## Limitations

- The length of s is 1 ~ 1,000.
- s consists only of lowercase alphabetic characters.

## Example

- s: "ababcdcdababcdcd" => answer: 9 (It is shortest when it is divided by 8 characters and compressed.)
- s: "abcabcdede" => answer: 8 (It is shortest when it is divided by 3 characters and compressed.)
