/**
 * @param {number} x
 * @return {boolean}
 */
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
        // we multiply by 10 because we eventually divide by 10. Say we have 123/ 10 = 12.3 ; if we take 12.3*10 we get 123 again ; so 123 / 10 = 12.3 and 12.3 * 10 = 123
        // Must note that we are adding the remainder of temp. If temp = 123 % 10 = .3; reverse then = .3
        // next go around reverse = .3 * 10 + (12 % 10)
        // reverse = 3 + (.2) = 3.2
        reverse = reverse * 10 + (temp %10);
        // we divide 123 / 10 = 12.3 
        // by using Math.floor we remove the .3 and in the next iteration we are left with 12
        // next iteration we divide 12 / 10 = 1.2 
        // by using Math.floor again 1.2 = 1
        temp = Math.floor(temp/10);
    }
    // compare reversed number to x for true or false
    return reverse === x;
};

// var isPalindrome = function(x) {
//   let reversed = x.toString().split('').reverse().join('');
//     return reversed === x.toString()
// };