```
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 

Example 1:

Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.




```


var sortSentence = function(s) {
    // Create empty array
    let sorted = []
    //loop through array but split at space to quarantine the each word
    for(let i of s.split(" ")){
        // insert into our new array 
        // at the index which is the last element of our string
        // if string is 'apple1' we will go to the length - 1 = apple1 
        // then we subtract 1 index from apple1 = isolation the integer 1
        // We insert at this index of our new sorted array

        sorted[i.slice(-1)-1] = i.slice(0, -1) // i.(0,-1) will take our current string starting from its 0 index and take away -1 index from the end, essentially removing our number and leaving only strings
    }
    // we then return our sorted array but join each index together with an added space create a string or sentence.
    return sorted.join(" ")
};