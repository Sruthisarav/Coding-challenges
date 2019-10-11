function largestPrimeFactor(number) {
  let factors = [];
  for(var i = 2; i < number; i++) {
    if (number%i === 0) {
      factors.push(largestPrimeFactor(i));
    }
  }
  if (factors.length === 0) {
    return number;
  } else {
    return factors[factors.length - 1];
  }
}

largestPrimeFactor(13195);
