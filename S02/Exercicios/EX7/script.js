var quantidade = 0;

for (var i = 2; i <= 1000; i++) {
  var primo = true;
  for (var j = 2; j < i; j++) {
    if (i % j === 0) {
      primo = false;
      break;
    }
  }
  if (primo) {
    quantidade += 1;
    console.log(i);
  }
}

console.log('Quantidade:', quantidade);

/*--------------------------------------------------------------------------------------------------------------*/
// Refatoração
function isPrime(number, primes) {
  for (var i = 0; i < primes.length; i++) {
    if (primes[i] > Math.sqrt(number)) {
      break;
    }
    if (number % primes[i] === 0) {
      return false;
    }
  }
  return true;
}

var primes = [2];
var count = 1;

for (var i = 3; i <= 1000; i += 2) {
  if (isPrime(i, primes)) {
    primes.push(i);
    count++;
    console.log(i);
  }
}

console.log('Quantidade:', count);
