/* 
https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript
*/

function zeros(n) {
  let kmax = Math.floor(Math.log(n) * (1 / Math.log(5)));
  let result = 0;
  for (let i = 1; i <= kmax; i++) {
    result += Math.floor(n / Math.pow(5, i));
  }
  return result;
}

const x = zeros(6)

console.log(x);
