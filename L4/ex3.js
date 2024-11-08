// Definim o funcție numită factorial, care ia un parametru num
function factorial(num) {
  // Verificăm dacă numărul este 0, deoarece factorialul lui 0 este 1
  if (num === 0) {
    return 1; // Returnăm 1 ca rezultat pentru cazul special
  }

  // Inițializăm variabila rezultat cu 1, aceasta va stoca factorialul final
  let result = 1;

  // Folosim un loop for pentru a înmulți toate numerele de la 1 la num
  for (let i = 1; i <= num; i++) {
    result *= i; // Înmulțim rezultatul curent cu i și stocăm în variabila result
  }

  // Returnăm valoarea calculată a factorialului
  return result;
}

// Apelăm funcția cu un număr exemplu, de exemplu 5, și afișăm rezultatul în consolă
console.log(factorial(4)); 
