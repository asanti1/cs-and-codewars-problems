function order(phrase) {
  const pattern = /[1-9]/g;
  const ordered = [];
  const words = phrase.split(" ");
  for (let i = 0; i < words.length; i++) {
    const x = words[i].charAt(words[i].search(pattern));
    ordered[x - 1] = words[i];
  }
  return ordered.join(" ");
}

console.log(order("s1et posit2ion"));
