// Definim o funcție care calculează suma cifrelor unui număr
function sumaCifrelor(numar) {
  // Convertim numărul la șir de caractere pentru a accesa fiecare cifră
  let sir = numar.toString();

  // Folosim metoda `split('')` pentru a separa fiecare cifră
  // Folosim `reduce()` pentru a calcula suma cifrelor
  // `parseInt(cifra)` convertește fiecare caracter în număr întreg
  // `total + parseInt(cifra)` adună fiecare cifră la totalul parțial
  let suma = sir.split("").reduce((total, cifra) => total + parseInt(cifra), 0);

  // Returnăm suma totală a cifrelor
  return suma;
}

// Exemplu de utilizare a funcției
let numar = 12345; // Definim un număr de test
// Afișăm rezultatul folosind `console.log`
console.log("Suma cifrelor numărului este:", sumaCifrelor(numar));
