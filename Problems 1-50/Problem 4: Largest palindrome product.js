function largestPalindromeProduct(n) {
  function check_palindrome(num) {
    const norm_num = num.toString();
    const len = norm_num.length;
    for(var i = len - 1; i >=0; i--) {
      if (norm_num[i] !== norm_num[len - i - 1]) {
        return false;
      }
    }
    return true;
  }
  const min = Math.pow(10, n - 1);
  const max = Math.pow(10, n) - 1
  let palindrome_max = 0;
  for(var i = max; i >= min; i--) {
    for(var j = max; j >= min; j--) {
      if ((i*j) > palindrome_max && check_palindrome(i * j)) {
        palindrome_max = i*j;
      }
    }
  }
  return palindrome_max;
}

largestPalindromeProduct(3);
