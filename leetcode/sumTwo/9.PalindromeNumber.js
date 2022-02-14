var isPalindrome = function(x) {
    // if x is negative it is not a palindrome
    if(x < 0){
        return false;
    }
    // save our original number
    let temp = x;
    // we need to add a binder for our reversed number
    let reverse = 0;
    //while our temp is greater than 0 we add to our new reverse
    while( temp > 0){
        // 0 * 10 + (original numbers last number which is remainder of x divided by 10)
        reverse = reverse * 10 + (temp %10);
        // we divide temp by 10 and floor it to take smallest number
        temp = Math.floor(temp/10);
    }
    // compare reversed number to x for true or false
    return reverse === x;
};
