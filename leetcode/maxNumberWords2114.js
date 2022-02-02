var mostWordsFound = function(sentences) {
     /**
      * We saver our current value in a temp variable 
      * We set a max value to 0 and compare it to our temp variable
      * if our temp is greater than max
      * we update max to be our temp
      * inside our loop to get the temp we take our sentence at position i and split at space
      * .length will give us the count of each space
      * Outside our loop we can return max
      */
    let max = 0;
    let temp = 0;
    for(let i in sentences){
        temp = sentences[i].split(' ').length;
        if(temp > max){
            max = temp;
        }
        
    }
    return max
};