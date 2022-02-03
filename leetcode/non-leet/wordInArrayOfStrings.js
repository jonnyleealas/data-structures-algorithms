
let findWord = function (sentence, word) {


    // loop through sentence array
    for (let i in sentence) {
        console.log('inside i:', sentence[i].split(' '), i)
        // split each index/sub-array of sentence into its own array
        // we split at the spaces to separate each word
        let words = sentence[i].split(' ')
        console.log('words', words)
        // loop through each index of the sub-array
        for (let j in words) {
            console.log('j:::', words[j])
            // if the sub-array at index j === word we can return the word

            if (words[j] === word) {
                return words[j]
            }
        }
    }
    // if the condition is never true we return false
    return false
};

console.log(findWord(["i am legend", 'i am apple', "i am steak"], 'steak'));