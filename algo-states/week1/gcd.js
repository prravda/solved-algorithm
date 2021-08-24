// gcd algorithm - brute force
const gcdWithBruteForce = (a, b) => {
  // variable for contain bigger and smaller or same
  let bigger = 0;
  let smaller = 0;

  // a is larger
  if (a > b) {
    bigger = a;
    smaller = b;
  }
  // b is larger
  if (a < b) {
    bigger = b;
    smaller = a;
  }
  // same 
  bigger, smaller = a;

  for (let i = 1; i < smaller; i++) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
};

// gcd algorithm - euclidean algorithm with modulo operator
const gcdWithEuclidean = (a, b) => {
  // base cases
  if (b === 0) {
    return a;
  } 

  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }
  
  // euclidian logic
  if (a > b) {
    return gcdWithEuclidean(a - b, b);
  }
  return gcdWithEuclidean(a, b - a);
};

// gcd algorithm - euclidean algorithm with modulo operator
const gcdWithModulo = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcdWithModulo(b, a%b);
}

// i: numbers of array / o: gcd of all of numbers
const gcdWithModuloForManyNumbers = (numbers) => {
  // euclidean-modulo function for auxillary 
  const aux = (a, b) => {
    if (b === 0) {
      return a;
    }
    return aux(b, a%b);
  }

  // return all number's gcd with reduce method
  return numbers.reduce(aux);
}