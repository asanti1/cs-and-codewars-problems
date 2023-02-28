/* 

https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
*/
function humanReadable(timeInSec) {
  if (timeInSec > 359999) return "99:59:99";
  if (timeInSec < 0) return "00:00:00";

  let final = "";
  const hours = Math.floor(timeInSec / 3600);
  final += hours <= 9 ? `0${hours}:` : `${hours}:`;

  const minutes = Math.floor((timeInSec % 3600) / 60);

  final += minutes <= 9 ? `0${minutes}:` : `${minutes}:`;
  const seconds = (timeInSec % 3600) % 60;

  return seconds <= 9 ? final + `0${seconds}` : final + `${seconds}`;
}

const x = humanReadable(9999999);
