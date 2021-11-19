function palindrome(str) {
  str = str.toUpperCase().replace(/[^0-9a-z]/gi, '');
  let reverseStr = str.split('').reverse().join(''); 
  return reverseStr === str;
}
console.log(palindrome("A man, a plan, a canal. Panama"));
